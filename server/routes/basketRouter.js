const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

//
router.get("/:userId", basketController.getBasketUser)
router.post("/", basketController.addProduct)
// router.delete("/", basketController.deleteProduct)
// router.get('/:id',productController.getOne)
// router.get("/pizza", productController.getAllPizza)
router.delete("/", basketController.deleteProductInBasket)

module.exports = router