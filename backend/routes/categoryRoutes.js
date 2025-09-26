import express from 'express'
import { addCategory, getCategory, allCategory, updateCategory, deleteCategory } from '../controllers/CategoryController.js'
import authAdmin from '../middleware/authAdmin.js'


const categoryRouter = express.Router()

// Category

categoryRouter.post("/add", authAdmin, addCategory)
categoryRouter.post("/get", authAdmin, getCategory)
categoryRouter.post("/all", authAdmin, allCategory)
categoryRouter.post("/update", authAdmin, updateCategory)
categoryRouter.post("/delete", authAdmin, deleteCategory)



export default categoryRouter

