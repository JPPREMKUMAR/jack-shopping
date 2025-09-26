
import jwt from 'jsonwebtoken'



const authUser = async (req, res, next) => {

    try {
        const { token } = req.headers

        // console.log(token)
        if (token !== '') {
            //console.log(token)
            const userId = jwt.verify(token, process.env.JWT_SECRET)
            console.log(userId)
            req.userId = userId
            next()

        } else {

            return res.json({ success: false, message: "Invalid jwtToken" })
        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }


}


export default authUser