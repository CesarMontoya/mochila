import { NextResponse } from "next/server";
import { db } from '@/database';
import { seedActivity, seedGrade, seedGroup, seedUser, seedWorkspaces } from "@/seed";

type Data = { message: string };

export async function GET<Data>( req: Request ) {
    
    if ( process.env.NODE_ENV === 'production') {
        return NextResponse.json({ message: 'Access to API denied.' })
    }

    await db.connect();

    try {

       await seedWorkspaces();
       await seedGroup();
       await seedUser();
       await seedActivity();
       await seedGrade();

    } catch (error) {

        console.log(error);
        return { messageError: error }

    }

    await db.disconnect();
    
    return NextResponse.json({ message: 'Success request' });
}