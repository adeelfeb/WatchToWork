import mongoose from "mongoose"

const cateorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true})

export const Category = mongoose.model('Category', cateorySchema)