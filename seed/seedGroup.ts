import { seed } from "@/database";
import { Group, Workspace } from "@/models";

export const seedGroup = async() => {

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
    
} 