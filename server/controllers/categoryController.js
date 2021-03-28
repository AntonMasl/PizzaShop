const Category = require('../models/Category')

class CategoryController {
    async getAll(req, res) {
        try {
            const allCategory = await Category.find()
            res.json(allCategory)
        } catch (error) {
            res.json({"message": "Error"})
        }
    }
}


module.exports = new CategoryController()