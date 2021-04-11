const Product = require('../models/Product')

class ProductController {
    async create(req, res) {
        console.log(req.body)
        try {
            let {
                name,
                category,
                diameter,
                weightOnTraditionalDough,
                weightOnSmallDough,
                weight,
                prices,
                price,
                foodValue,
                description
            } = req.body
            const product = new Product({
                name,
                category,
                imageSrc: req.file ? req.file.path.slice(8) : '',
                diameter: diameter ? JSON.parse(diameter) : {},
                weightOnTraditionalDough: weightOnTraditionalDough ? JSON.parse(weightOnTraditionalDough) : {},
                weightOnSmallDough: weightOnSmallDough ? JSON.parse(weightOnSmallDough) : {},
                weight,
                prices: prices ? JSON.parse(prices) : null,
                price,
                foodValue: JSON.parse(foodValue),
                description
            })
            await product.save()
            console.log(product)
            return res.json(product)
        } catch (error) {
            console.log(error)
            return res.json({message: "Error"})
        }
    }

    async getAll(req, res) {
        try {
            let {categoryId} = req.query;
            const allProduct = await Product.find({category: categoryId}).populate('category')
            return res.json(allProduct)
        } catch (error) {
            return res.json({"message": "Error"})
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const product =await Product.findOne({_id: id}).populate('category')
        return res.json(product)
    }

    // async getAllPizza(req, res) {
    //     try {
    //         const allProduct = await Product.find().populate('category')
    //         console.log(allPizza)
    //         return  res.json(allPizza)
    //     } catch (error) {
    //         return res.json({"message": "Error"})
    //     }
    // }
    //
    //
    // async delete(req, res) {
    //     let {id} = req.body
    //     const pizza = await Pizza.findByIdAndDelete(id)
    //     return res.json({message: `Удалена пицца: ${pizza.name}`})
    // }
}


module.exports = new ProductController()