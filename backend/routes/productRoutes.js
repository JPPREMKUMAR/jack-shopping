

import express from 'express'
import authAdmin from '../middleware/authAdmin.js'
import { addProduct, getProduct, updateProduct, deleteProduct } from '../controllers/productController.js'
const productRouter = express.Router()



// products Route
productRouter.post('/add', authAdmin, addProduct)
productRouter.post('/get', authAdmin, getProduct)
productRouter.post('/update', authAdmin, updateProduct)
productRouter.post('/delete', authAdmin, deleteProduct)






export default productRouter

