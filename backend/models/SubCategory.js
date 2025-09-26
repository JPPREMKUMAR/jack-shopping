import mongoose from "mongoose";


const subCategorySchema = new mongoose.Schema({

    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    description: { type: String, default: "" },
    isActive: { type: Boolean, default: true }
}, { timestamps: true })


const SubCategory = mongoose.model("subCategory", subCategorySchema)

export default SubCategory