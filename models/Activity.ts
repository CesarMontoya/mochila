import mongoose, { Schema, Model, model } from "mongoose";
import { gradeSchema } from "./Grade";
import { IActivity } from "@/interfaces/activity";

// If modify Activity Schema, you must to modify Activity interface.

const activitySchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true,
        maxlength: [30, 'Activity name must have less or equal then 30 characters'],
        minlength: [3, 'Activity name must have more or equal then 3 characters']
     },
    type: {
        type: String,
        enum: {
            values: ['normal', 'group', 'attendance'],
            message: '{VALUE} is not supported',
        },
        default: 'normal',
    },
    grades: [ gradeSchema ],
    tab: {
        groupId: { type: Schema.Types.ObjectId },
        tabId: { type: Schema.Types.ObjectId },
    }
},{
    timestamps: true,
});

const Activity: Model<IActivity> = mongoose.models.Activity || model('Activity', activitySchema);

export default Activity;