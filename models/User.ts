import mongoose, { Schema, Model, model } from "mongoose";
import { IUser } from "@/interfaces/user";
import { roles } from "./Workspace";

const userSchema = new Schema({
    firstName: { 
        type: String, 
        required: true, 
        trim: true,
        maxlength: [50, 'A first name must have less or equal then 50 characters'],
        minlength: [3, 'A first name must have more or equal then 3 characters'] 
    },
    lastName: { 
        type: String, 
        required: true, 
        trim: true,
        maxlength: [50, 'A last name must have less or equal then 50 characters'],
        minlength: [3, 'A last name must have more or equal then 3 characters'] 
    },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    workspaces: [{
        workspace: { 
            type: Schema.Types.ObjectId,
            ref: 'Workspace',
        },
        role: [{
            type: String,
            enum: roles,
            default: 'student',
        }],
    }],
    groups: [{ 
        group: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        },
        role: [{
            type: String,
            enum: roles,
            default: 'student',
        }],
    }],
},{
    timestamps: true,
});

const User: Model<IUser> = mongoose.models.User || model( 'User', userSchema );

export default User;