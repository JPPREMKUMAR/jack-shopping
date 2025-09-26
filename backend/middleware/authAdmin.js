

import jwt from 'jsonwebtoken'




const authAdmin = async (req, res, next) => {

    try {

        //console.log(req.headers)
        const { token } = req.headers
        console.log(token)

        const emailId = jwt.verify(token, process.env.JWT_SECRET)
        console.log(emailId)

        if (emailId === process.env.ADMIN_EMAIL) {
            next()
        } else {
            return res.json({ success: false, message: "Invalid Credientials" })

        }



    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }



}


export default authAdmin