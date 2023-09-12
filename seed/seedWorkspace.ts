import { seed } from "@/database";
import { Workspace } from "@/models";

export const seedWorkspaces = async() => {

    // Fill Workspaces document on database with seed data
    await Workspace.deleteMany();
    await Workspace.insertMany( seed.initialData.workspace );

}