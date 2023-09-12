import { NextResponse } from "next/server";
import { db, seed } from "@/database";
import { Group, Workspace } from "@/models";

type Data = { message: string };

export async function GET<Data>( req: Request ) {

    if ( process.env.NODE_ENV === 'production') {
        return NextResponse.json({ message: 'Access to API denied.' })
    }

    await db.connect();
    
    // Reset and fill Group colection.
    await Group.deleteMany();
    await Group.insertMany( seed.initialData.groups );

    // Get groups id array from DB
    const groupsId = await Group.find({}, { _id: 1 });

    // Get workspaces id array from DB and take demo Id.
    const demoWS = await Workspace.find({}, { _id: 1});
    const demoId = demoWS[0]._id;

    // Update demo workspace with groups just created.
    await Workspace.findByIdAndUpdate(demoId, { groups: groupsId });

    await db.disconnect();

    return NextResponse.json({ message: 'Success request' });
}