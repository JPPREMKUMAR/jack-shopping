
import Category from "../models/Category.js"

// Add Category

export const addCategory = async (req, res) => {

    try {
        const { name, description } = req.body

        if (name !== '' && description !== '') {

            const isCategoryPresent = await Category.findOne({ name: name })
            if (isCategoryPresent === null) {

                const newCategory = await Category({ name, description })
                newCategory.save()
                return res.json({ success: true, message: "Category Added." })

            } else {
                return res.json({ success: false, message: "Invalid Category." })


            }


        } else {
            return res.json({ success: false, message: "Invalid Details" })
        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}

// get Category

export const getCategory = async (req, res) => {

    try {
        const { id } = req.body
        const isCategory = await Category.findOne({ _id: id })
        if (isCategory === null) {
            return res.json({ success: false, message: "Invalid CategoryId" })
        } else {
            return res.json({ success: true, category: isCategory })

        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// All Category

export const allCategory = async (req, res) => {

    try {
        const allCategories = await Category.find({})
        return res.json({ success: true, category: allCategories })

    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


// update Category

export const updateCategory = async (req, res) => {

    try {
        const { id, name } = req.body

        const isCategoryPresent = await Category.findOne({ _id: id })
        console.log(isCategoryPresent)
        if (isCategoryPresent === null) {
            return res.json({ success: false, message: "Invalid CategoryId" })
        } else {
            await Category.updateOne({ _id: id }, { name: name })

            return res.json({ succes: true, message: "Updated Successful" })

        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// Delete Category

export const deleteCategory = async (req, res) => {

    try {
        const { id } = req.body

        const isCategoryPresent = await Category.findOne({ _id: id })
        if (isCategoryPresent === null) {
            return res.json({ success: false, message: "Invalid CategoryId" })

        } else {
            await Category.deleteOne({ _id: id })
            return res.json({ succes: true, message: "Deleted Successful" })

        }


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

} 