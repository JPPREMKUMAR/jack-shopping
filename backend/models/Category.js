import mongoose from "mongoose"



const categorySchema = new mongoose.Schema({

    name: { type: String, unique: true, required: true },
    description: { type: String, default: '' },
    isActive: { type: Boolean, default: true }

}, { timestamps: true })


const Category = mongoose.model("category", categorySchema)
export default Category