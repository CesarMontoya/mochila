import { IGrade } from "@/interfaces/grades";
import mongoose, { Schema, Model, model } from "mongoose";

// If modify Grade Schema, you must to modify Activity interface.

export const gradeSchema = new Schema({
    grade: {
        type: String,
        trim: true,        
    },
    icon: { type: String },
    comment: { 
        type: String,
        trim: true,
        maxlength: [50, 'The comment must have less or equal then 50 characters'],
    },
    student: { 
        type: Schema.Types.ObjectId,
        ref: 'User' 
    }
});

const Grade:Model<IGrade> = mongoose.models.Grade || model('Grade', gradeSchema);

export default Grade;