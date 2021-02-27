const Pizza = require('../models/Pizza')
const Category = require('../models/Category')

class PizzaController {
    async create(req, res) {
        console.log(req.file)
        try {
            let {
                name,
                categoryId,
                weightOnTraditionalDough,
                weightOnSmallDough,
                price,
                foodValue,
                description
            } = req.body
            const category = await Category.findOne({_id: categoryId})
            if (category.name !== 'pizza') return
            const pizza = new Pizza({
                name,
                categoryId,
                imageSrc: req.file ? req.file.path.slice(8) : '',
                weightOnTraditionalDough: JSON.parse(weightOnTraditionalDough),
                weightOnSmallDough: JSON.parse(weightOnSmallDough),
                price: JSON.parse(price),
                foodValue: JSON.parse(foodValue),
                description
            })
            await pizza.save()
            console.log(pizza)
            return res.json(pizza)
        } catch (error) {
            console.log(error)
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