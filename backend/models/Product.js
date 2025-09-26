import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory", required: true },
    brand: { type: String },
    price: { type: Number, default: 0 },
    stack: { type: Number, default: 0 },
    images: { type: Array },
    isActive: { type: Boolean, default: true }

}, { timestamps: true })



const Product = mongoose.model("product", productSchema)

export default Product