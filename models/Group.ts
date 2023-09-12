import { IGroup } from "@/interfaces/group";
import mongoose, { Schema, Model, model } from "mongoose";

// If modify Group Schema, you must to modify Group interface.

const groupSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
        maxlength: [30, 'A tab name must have less or equal then 30 characters'],
        minlength: [3, 'A tab name must have more or equal then 3 characters']
    },
    tabs: [{
        name: { 
            type: String, 
            required: true, 
            trim: true,
            maxlength: [30, 'A tab name must have less or equal then 30 characters'],
            minlength: [3, 'A tab name must have more or equal then 3 characters'] 
        },
        type: {
            type: String,
            required: true,
            enum: {
                values: ['attendance', 'activities', 'custom'],
                message: 'Activity type must be one of the doc ref.'
            },
            default: 'activities',
        },
        activities: [{
            type: Schema.Types.ObjectId,
            ref: 'Activity',
        }],
    }],
    teachers: [{
        teacher: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        // In the future, can have 'teacher' and 'teacherAsistent' 
        role: { type: String, default: 'teacher' },
    }],
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
}, {
    timestamps: true,
});

const Group: Model<IGroup> = mongoose.models.Group || model('Group', groupSchema);

export default Group;