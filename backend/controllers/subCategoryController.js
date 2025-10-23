
import SubCategory from "../models/SubCategory.js"
import Category from "../models/Category.js"
// Add SubCategory

export const addSubCategory = async (req, res) => {

    try {
        //console.log(req)
        const { name, category } = req.body


        if (name !== '' && category !== '') {

            const isPresent = await SubCategory.findOne({ name: name })
            // console.log(isPresent)
            if (isPresent === null) {

                const newSubCategory = new SubCategory({

                    name, category
                })

                await newSubCategory.save()
                return res.json({ success: true, message: "SubCategory is Added." })

            } else {
                return res.json({ success: false, message: "SubCategory is there." })
            }


        } else {

            return res.json({ success: false, message: "Please Give me Valid Details." })
        }


    } catch (error) {
        console.log(error)
        return res.json({ success: false, error: error })
    }

}




// Get SubCategory

export const getSubCategory = async (req, res) => {

    try {
        const { subCategoryId } = req.body
        const isPresent = await SubCategory.findOne({ _id: subCategoryId })

        if (isPresent === null) {
            return res.json({ success: false, message: "Invalid subCategory" })

        } else {
            return res.json({ success: true, subCategory: isPresent })

        }


    } catch (error) {

        return res.json({ success: false, error })
    }

}



// All SubCategory

export const allSubCategory = async (req, res) => {

    try {
        const allCategories = await SubCategory.find({})
        res.json({ success: true, subCategory: allCategories })

    } catch (error) {

        return res.json({ success: false, error })
    }

}



// Update SubCategory

export const updateSubCategory = async (req, res) => {

    try {
        const { subCategoryId, subCategoryName } = req.body
        const isPresent = await SubCategory.findOne({ _id: subCategoryId })

        if (isPresent === null) {

            return res.json({ success: false, message: "Invalid SubCategory." })
        } else {

            await SubCategory.updateOne({ _id: subCategoryId }, { name: subCategoryName })
            return res.json({ success: true, message: "SubCategory Updated." })
        }


    } catch (error) {

        return res.json({ success: false, error })
    }

}



// Delete SubCategory

export const deleteSubCategory = async (req, res) => {

    try {
        const { subCategoryId } = req.body

        const isPresent = await SubCategory.findOne({ _id: subCategoryId })

        if (isPresent === null) {

            return res.json({ success: false, message: "Invalid SubCategory." })
        } else {
            await SubCategory.deleteOne({ _id: subCategoryId })
            res.json({ success: true, message: "Delete Successful." })
        }


    } catch (error) {

        return res.json({ success: false, error })
    }

}



// get All subCategories with Catagory

export const categoryOfSubCategories = async (req, res) => {

    try {
        const { categoryId } = req.params
        console.log(categoryId.toString())

        const isCategory = await Category.findOne({ _id: categoryId })
        console.log(isCategory)

        if (isCategory === null) {
            return res.json({ success: false, message: "Invalid Category." })
        } else {

            const allSubCategory = await SubCategory.find({ category: categoryId })
            console.log(allSubCategory)

            return res.json({ success: true, subCategories: allSubCategory })
        }

    } catch (error) {

        return res.json({ success: false, error })
    }

}

