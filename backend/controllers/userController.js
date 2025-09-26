
import User from '../models/User.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateToken = (jwtToken) => {

    return jwt.sign(jwtToken, process.env.JWT_SECRET)
}


//Register New User 

export const registerUser = async (req, res) => {

    try {

        const { name, email, password, phone, username } = req.body

        if (name !== '' && email !== '' && phone.length === 10 && password.length > 5 && username !== '') {

            const isUserPresent = await User.findOne({ email: email })

            console.log(isUserPresent)
            if (isUserPresent !== null) {
                return res.json({ success: false, message: "Email Address already Registered.Please Try with Another One." })
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                phone, username
            })
            await newUser.save()

            const token = generateToken(newUser._id.toString())
            // console.log(jwtToken)
            res.json({ success: true, message: "Register Successful.", token: token })



        } else {

            return res.json({ success: false, message: "Please Enter Valid Details" })
        }





    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


//login User 

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        //console.log(email)

        const isUserPresent = await User.findOne({ email: email })

        if (isUserPresent === null) {

            return res.json({ success: false, message: "Invalid Credientials" })
        } else {
            const dbPassword = isUserPresent.password

            const isPasswordTrue = await bcrypt.compare(password, dbPassword)
            if (isPasswordTrue) {
                const token = generateToken(isUserPresent._id.toString())
                return res.json({ success: true, message: "Login Successful", token: token })

            } else {
                return res.json({ success: false, message: "Please Enter Valid Password" })
            }

        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// User Profile 

export const userProfile = async (req, res) => {

    try {
        const userId = req.userId

        const user = await User.findOne({ _id: userId }, { password: 0 })
        res.json({ success: true, user })


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


// Change UserName 

export const changeUsername = async (req, res) => {

    try {
        const userId = req.userId
        const { username } = req.body

        const isUser = await User.findOne({ _id: userId })

        if (isUser === null) {

            return res.json({ success: false, message: "Invalid User" })
        } else {
            await User.updateOne({ _id: userId }, { $set: { username: username } })
            return res.json({ success: true, message: "username Updated." })

        }




    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


// Change Name 

export const changeName = async (req, res) => {

    try {

        const userId = req.userId
        const { name } = req.body

        const isUser = await User.findOne({ _id: userId })

        if (isUser === null) {

            return res.json({ success: false, message: "Invalid User" })
        } else {
            await User.updateOne({ _id: userId }, { $set: { name: name } })
            return res.json({ success: true, message: "name Updated." })

        }



    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


// Change Email 

export const changeEmail = async (req, res) => {

    try {
        const userId = req.userId
        const { email } = req.body

        const isUser = await User.findOne({ _id: userId })

        if (isUser === null) {

            return res.json({ success: false, message: "Invalid User" })
        } else {
            await User.updateOne({ _id: userId }, { $set: { email: email } })
            return res.json({ success: true, message: "Email Updated." })

        }



    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// Change Password 


export const changePassword = async (req, res) => {

    try {

        const userId = req.userId
        const { password } = req.body

        const isUser = await User.findOne({ _id: userId })

        if (isUser === null) {

            return res.json({ success: false, message: "Invalid User" })
        } else {

            const hashedPassword = await bcrypt.hash(password, 10)
            await User.updateOne({ _id: userId }, { $set: { password: hashedPassword } })
            return res.json({ success: true, message: "Password Updated." })

        }



    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


// Change Phone Number


export const changePhoneNumber = async (req, res) => {

    try {

        const userId = req.userId
        const { phone } = req.body

        const isUser = await User.findOne({ _id: userId })

        if (isUser === null) {

            return res.json({ success: false, message: "Invalid User" })
        } else {
            await User.updateOne({ _id: userId }, { $set: { phone: phone } })
            return res.json({ success: true, message: "Phone Number Updated." })

        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// change profile Image

export const changeProfile = async (req, res) => {

    try {


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// Admin Login 


export const adminLogin = async (req, res) => {
    try {

        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = generateToken(process.env.ADMIN_EMAIL)



            res.json({ message: "Login Success", token })

        } else {
            return res.json({ success: false, message: "Invalid Credientials" })

        }

    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }


}