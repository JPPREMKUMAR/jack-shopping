import express from 'express'
import { addCategory, getCategory, allCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js'
import authAdmin from '../middleware/authAdmin.js'
import { addSubCategory, getSubCategory, allSubCategory, updateSubCategory, deleteSubCategory, categoryOfSubCategories } from '../controllers/subCategoryController.js'


const categoryRouter = express.Router()

// Category

categoryRouter.post("/add", authAdmin, addCategory)
categoryRouter.post("/get", authAdmin, getCategory)
categoryRouter.post("/all", authAdmin, allCategory)
categoryRouter.post("/update", authAdmin, updateCategory)
categoryRouter.post("/delete", authAdmin, deleteCategory)

// SubCategories 

categoryRouter.post("/subcategories/add", authAdmin, addSubCategory)
categoryRouter.post("/subcategories/get", authAdmin, getSubCategory)
categoryRouter.post("/subcategories/all", authAdmin, allSubCategory)
categoryRouter.post("/subcategories/update", authAdmin, updateSubCategory)
categoryRouter.post("/subcategories/delete", authAdmin, deleteSubCategory)

// Get categoryOfSubCategories

categoryRouter.post("/:categoryId/subcategories", categoryOfSubCategories)


export default categoryRouter

