import { IWorkspace } from '@/interfaces';
import mongoose, { Schema, Model, model } from 'mongoose';

export const roles = ['staff', 'teacher', 'student', 'family'];

const workspace = new Schema({ 
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, 'A workspace must have less or equal then 50 characters'],
        minlength: [3, 'A workspace must have more or equal then 3 characters']
    },
    properties: {
        type: Object,
    },
    users: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        role: [{
            type: String,
            enum: roles,
            default: 'student',
        }],
    }],
    groups: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Group',
    }],
 });

const Workspace: Model<IWorkspace> = mongoose.models.Workspace || model('Workspace', workspace);

export default Workspace;