import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    phone: { type: String, required: true },
    profileImageUrl: { type: String },
    isActive: { type: Boolean, default: true },
}, { timestamps: true })




const User = mongoose.model('User', userSchema)

export default User