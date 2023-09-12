import { NextResponse } from "next/server";
import { Workspace } from "@/models";
import { db } from "@/database";

export async function GET( req: Request ):Promise<NextResponse> {

    if ( process.env.NODE_ENV === 'production') {
        return NextResponse.json({ message: 'Access to API denied.' })
    }

    await db.connect();

    const workspaces = await Workspace.find();

    await db.disconnect();
    return NextResponse.json({ data: workspaces });
}