const Salad = require('../models/Salad')
const Category = require('../models/Category')

class SaladController {
    async create(req, res) {
        try {
            let {
                name,
                category,
                weight,
                price,
                foodValue,
                description
            } = req.body
            const selectCategory = await Category.findOne({_id: category})
            if (selectCategory.name !== 'salad') return
            const salad = new Salad({
                name,
                category,
                imageSrc: req.file ? req.file.path.slice(8) : '',
                weight,
                price,
                foodValue: JSON.parse(foodValue),
                description
            })
            await salad.save()
            return res.json(salad)
        } catch (error) {
            console.log(error)
            return res.json({message: "Error"})
        }
    }


    async getAll(req, res) {
        try {
            const allSalad = await Salad.find()
            return  res.json(allSalad)
        } catch (error) {
            return res.json({"message": "Error"})
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const salad =await Salad.findOne({_id: id}).populate('category')

        return res.json(salad)
    }

    async delete(req, res) {
        let {id} = req.body
        const salad = await Salad.findByIdAndDelete(id)
        return res.json({message: `Удален салат: ${salad.name}`})
    }
}


module.exports = new SaladController()