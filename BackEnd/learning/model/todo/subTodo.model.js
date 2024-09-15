import mongoose, { mongo, trusted } from "mongoose";

const subtodoSchema = new mongoose.Schema({
   
},{timestamps: true})

export const SubTodo = mongoose.model("SubTodo", subtodoSchema)