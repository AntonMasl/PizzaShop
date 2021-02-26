const Pizza = require('../models/Pizza')
const Category = require('../models/Category')

class PizzaController {
    async create(req, res) {
        try {
            let {
                name,
                categoryName,
                weightOnTraditionalDough,
                weightOnSmallDough,
                price,
                foodValue,
                description
            } = req.body
            const category = await Category.findOne({name: categoryName})
            const pizza = new Pizza({
                name,
                category: category._id,
                weightOnTraditionalDough,
                weightOnSmallDough,
                price,
                foodValue,
                description
            })
            await pizza.save()
            return res.json({message: "Пицца успешно создана"})
        } catch (error) {
            res.json({message: "Error"})
        }
    }


    async getAll(req, res) {
        try {
            const allPizza = await Pizza.find().populate('category')
            res.json(allPizza)
        } catch (error) {
            res.json({"message": "Error"})
        }
    }

    async getOne() {

    }

    async delete(req, res) {
        let {id} = req.body
        const pizza = await Pizza.findByIdAndDelete(id)
        res.json({message: `Удалена пицца: ${pizza.name}`})
    }
}


module.exports = new PizzaController()