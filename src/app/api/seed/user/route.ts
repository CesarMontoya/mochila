import { NextResponse } from "next/server";
import { db, seed } from "@/database";
import { Group, User, Workspace } from "@/models";

type Data = { message: string };

export async function GET<Data>( req: Request ) {

    if ( process.env.NODE_ENV === 'production') {
        return NextResponse.json({ message: 'Access to API denied.' })
    }

    await db.connect();

    // ----------------------------------------------------------------
    //  Create Users
    // ----------------------------------------------------------------

    // Get Workspaces from db
    const workspacesRes = await Workspace.find().lean();
    const firstWS = workspacesRes[0]._id.toString();

    // Get groups ids from DB
    const groups = await Group.find().lean();
    const firstGroup = groups[0]._id.toString();

    // Assign workspace and group id to each user
    const dataInitial = seed.initialData.users;
    seed.initialData.users.forEach( (user, index) => {
        dataInitial[index].workspaces[0].workspace = firstWS;
        dataInitial[index].groups![0].group = firstGroup;
    });

    // Reset and fill User colection.
    await User.deleteMany();
    await User.insertMany( dataInitial );

    // ----------------------------------------------------------------
    //  Update Workspaces[0] with users
    // ----------------------------------------------------------------

    // Get Users id from DB
    const usersDb = await User.find().lean();
    const usersForWS = usersDb.map( user => {
        return {
            user: user._id,
            role: user.workspaces[0].role,
        }
    } );

    // Update Workspaces[0] document
    await Workspace.findByIdAndUpdate( firstWS, { users: usersForWS } );

    // ----------------------------------------------------------------
    //  Update Group[0] with users
    // ----------------------------------------------------------------

    let teachers: any = [];
    let students: any = [];

    usersDb.forEach( user => {
        
        if ( user.groups![0].role[0] === 'teacher' ) {
            teachers.push( user._id );
        } else if ( user.groups![0].role[0] === 'student' ) {
            students.push( user._id );
        }

    } );

    await Group.findByIdAndUpdate( firstGroup, { teachers, students } );

    await db.disconnect();
    return NextResponse.json({ message: 'Success request' });
}