

import express from 'express'
import { registerUser, loginUser, userProfile, changeName, changeEmail, changePassword, changeProfile, changeUsername, changePhoneNumber, adminLogin } from '../controllers/userController.js'
import authUser from '../middleware/auth.js'
const userRouter = express.Router()




// Register User 
userRouter.post("/register", registerUser)
//Login User 
userRouter.post("/login", loginUser)

// Admin Login 
userRouter.post('/admin-login', adminLogin)

//User Profile
userRouter.get("/profile", authUser, userProfile)
userRouter.post('/change-username', authUser, changeUsername)
userRouter.post('/change-name', authUser, changeName)
userRouter.post('/change-email', authUser, changeEmail)
userRouter.post('/change-password', authUser, changePassword)
userRouter.post('/change-number', authUser, changePhoneNumber)
userRouter.post('/change-profile', changeProfile)



export default userRouter