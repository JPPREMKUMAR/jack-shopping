
import Category from "../models/Category.js"

// Add Category

export const addCategory = async (req, res) => {

    try {
        const { name, description } = req.body

        if (name !== '' && description !== '') {

            const newCategory = await Category({ name, description })
            newCategory.save()
            return res.json({ success: true, message: "Category Added." })

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


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// All Category

export const allCategory = async (req, res) => {

    try {


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}


// update Category

export const updateCategory = async (req, res) => {

    try {


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}



// Delete Category

export const deleteCategory = async (req, res) => {

    try {


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

} 