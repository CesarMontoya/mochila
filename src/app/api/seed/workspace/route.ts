import { NextResponse } from "next/server";
import { db, seed } from "@/database";
import { Workspace } from "@/models";

type Data = { message: string };

export async function GET<Data>( req: Request ) {

    if ( process.env.NODE_ENV === 'production') {
        return NextResponse.json({ message: 'Access to API denied.' })
    }

    await db.connect();

    // Fill Workspaces document on database with seed data
    await Workspace.deleteMany();
    await Workspace.insertMany( seed.initialData.workspace );

    await db.disconnect();
    
    return NextResponse.json({ message: 'Success request' });
}