import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./config/db.js"
import userRouter from './routes/userRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
const app = express()

//MIddlewares
app.use(express.json())
app.use(cors())


// Routes
app.get("/", (req, res) => {

    res.send("API WORKING.")
})

//User Routes 
app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)

// DB Connection 

await connectDB()


// PORT NUMBER 
const PORT = process.env.PORT || 3000



// Start Server 


app.listen(PORT, () => {
    console.log(`Server Working on ${PORT}`)

})