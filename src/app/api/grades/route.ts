import { NextResponse } from "next/server";
import { db } from "@/database";
import Grade from "@/models/Grade";

export async function GET( req: Request ) {

    await db.connect();

    // Por el momento solo se llamaran los grades del primer workspaces
    const grades = await Grade.find();

    await db.disconnect();
    return NextResponse.json({ grades });
}