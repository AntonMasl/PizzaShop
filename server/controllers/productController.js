const Pizza = require('../models/Pizza')

class PizzaController {
    async create(req, res) {
        try {
            let {
                name,
                category,
                weightOnTraditionalDough,
                weightOnSmallDough,
                prices,
                foodValue,
                description
            } = req.body
            const pizza = new Pizza({
                name,
                category,
                imageSrc: req.file ? req.file.path.slice(8) : '',
                weightOnTraditionalDough: JSON.parse(weightOnTraditionalDough),
                weightOnSmallDough: JSON.parse(weightOnSmallDough),
                prices: JSON.parse(prices),
                foodValue: JSON.parse(foodValue),
                description
            })
            await pizza.save()
            console.log(pizza)
            return res.json(pizza)
        } catch (error) {
            console.log(error)
            return res.json({message: "Error"})
        }
    }


    async getAll(req, res) {
        try {
            const allPizza = await Pizza.find().populate('category')
            return  res.json(allPizza)
        } catch (error) {
            return res.json({"message": "Error"})
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const pizza =await Pizza.findOne({_id: id}).populate('category')
        return res.json(pizza)
    }

    async delete(req, res) {
        let {id} = req.body
        const pizza = await Pizza.findByIdAndDelete(id)
        return res.json({message: `Удалена пицца: ${pizza.name}`})
    }
}


module.exports = new PizzaController()