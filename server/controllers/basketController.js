const Basket = require('../models/Basket')

class BasketController {
    async addProduct(req, res) {
        try {
            let {
                userId,
                product
            } = req.body
            // let a = await Basket.updateOne({"user": userId}, {
            //     "$set": {
            //         "products.0.count": 5
            //     }
            // })


            // let z  = await Basket.findOne({user: userId})
            // return res.json(z)
            // console.log(z)

            // product = {...product, count: 1}
            // if (findBasket) {
            //     console.log(1)
            //     const productInBasketIndex = findBasket.products.findIndex(item => JSON.stringify(item) == JSON.stringify(product))
            //     if (productInBasketIndex !== -1) {
            //         console.log(productInBasketIndex)
            //         // const query = 'products.'+variable
            //         // findBasket.findOneAndUpdate({}, {$inc:{"products.0.count":2}})
            //         // const a = Basket.updateOne({user: userId}, {$inc: {'products.0.count': 2}})
            //         // await findBasket.save()
            //         // console.log(findBasket)
            //         // findBasket.products[0].count = 3
            //         // await findBasket.save()
            //         Basket.updateOne({user: userId},)
            //         console.log("222222222222222222222")
            //     }
            //     // findBasket.products.push(product)
            //     // await findBasket.save()
            //     // return res.json(findBasket)
            // }
            //
            console.log(product)
            const findBasket = await Basket.findOne({user: userId})
            if (findBasket) {
                //const productInBasketIndex = findBasket.products.findIndex(item => JSON.stringify(item) == JSON.stringify({...copyProduct}))
                let newCount = 0;
                const productInBasketIndex = findBasket.products.findIndex(item => {
                    newCount = item.count + product.count
                    let copyItem = {...item}
                    let copyProduct = {...product}
                    delete copyItem.count
                    delete copyProduct.count
                    return JSON.stringify(copyItem) == JSON.stringify(copyProduct)
                })
                console.log(productInBasketIndex)
                if (productInBasketIndex !== -1) {
                    console.log(222222)
                    await Basket.updateOne({"user": userId}, {
                        "$set": {
                            [`products.${productInBasketIndex}.count`]: newCount
                        }
                    })
                    return res.json(findBasket)
                }
                findBasket.products.push(product)
                await findBasket.save()
                return res.json(findBasket)
            }
            console.log(1111111111111111)
            const basket = new Basket({
                user: userId
            })
            basket.products.push(product)
            await basket.save()
            return res.json(basket)
        } catch (error) {
            console.log(error)
            return res.json({message: "Error"})
        }
    }

    async getBasketUser(req, res) {
        try {
            const {userId} = req.params
            console.log(req.params)
            const basket = await Basket.findOne({user: userId}).populate('user')
            return res.json(basket)
        } catch (error) {
            return res.json({"message": "Error"})
        }
    }

    async deleteProductInBasket(req, res) {
        try {
            const {product, userId} = req.body
            console.log(req.body)
            // return res.json(product)
            const basket = await Basket.findOne({user: userId})
            const newProducts = basket.products.filter(item => {
                return JSON.stringify(item) != JSON.stringify(product)
            })
            basket.products = newProducts
            await basket.save()
            return res.json(basket.products)
        } catch (e) {
            return res.json({"message": "Error"})
        }

    }
}


module.exports = new BasketController()