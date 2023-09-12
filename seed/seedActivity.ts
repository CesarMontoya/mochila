import { seed } from "@/database";
import { Group, Activity } from "@/models";

export const seedActivity = async() => {

    // Get Tab from first group
    const tab = await Group.find({}, { tabs: 1 });
    const tabId = tab[0].tabs![0]._id;
    const groupId = tab[0]._id;

    const firstTab = { 
        groupId, 
        tabId, 
    };

    // Fill data with Tab id
    const activitiesToCreate = seed.initialData.activities.map( act => {
        return { ...act, tab: firstTab };        
    });

    // Reset and fill Activity colection.
    await Activity.deleteMany();
    await Activity.insertMany( activitiesToCreate );

    // Update Group -> Tab
    const activityIdsObj = await Activity.find({}, { id: 1 });
    const activityIdsArr = activityIdsObj.map(act => act._id);

    await Group.findOneAndUpdate(
        { 'tabs._id': tabId },
        {  $set: { 'tabs.$.activities': activityIdsArr } },
    );
    
}