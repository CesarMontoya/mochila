import { db, seed } from "@/database";
import { Activity, Group } from "@/models";
import Grade from "@/models/Grade";
import { NextResponse } from "next/server";

type Data = { message: string };

export async function GET<Data>( req: Request ) {

    if ( process.env.NODE_ENV === 'production') {
        return NextResponse.json({ message: 'Access to API denied.' })
    }

    await db.connect();

    // ----------------------------------------------------------------
    //  Create Grades
    // ----------------------------------------------------------------

    // Get students from db
    const students = await Group.find({name: 'Física 10-01'}, 'students -_id');

    // Get seed data
    const gradesSeed = seed.initialData.grades;

    // Create new array of objects with seed data and students
    const gradesToSave = gradesSeed.map((grade, index) => {

        if ( index >= students[0].students!.length ) {
            return { 
                grade: grade.grade,
                student: students[0].students![index - students[0].students!.length],
            }
        }

        return {
            grade: grade.grade,
            student: students[0].students![index],
        }
    });

    // Reset and fill Grade colection.
    await Grade.deleteMany();
    await Grade.insertMany( gradesToSave );

    // ----------------------------------------------------------------
    //  Insert Grades into Activity
    // ----------------------------------------------------------------

    // Get activities and grades from DB
    const activitiesDB = await Activity.find({}, { id: 1 });
    const gradesDB = await Grade.find();
    
    // Slice grades in two arrays
    const gradesForFirstActivity = gradesDB.slice(0, students[0].students?.length);
    const gradesForSecondActivity = gradesDB.slice(students[0].students?.length, gradesDB.length+1);

    // Populate Activities 1 and 2 with grades.
    await Activity.findByIdAndUpdate( activitiesDB[0]._id, { grades: gradesForFirstActivity } );
    await Activity.findByIdAndUpdate( activitiesDB[1]._id, { grades: gradesForSecondActivity } );

    await db.disconnect();
    return NextResponse.json({ message: 'Success request' });
}