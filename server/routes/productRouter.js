const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const upload = require('../middleware/upload')


// const Category = require('../models/Category')


router.post("/", upload.single('image'), productController.create) //single() - загружаем всего лишь один файл - image -поле которое отправляем
router.get("/", productController.getAll)
router.get('/:id',productController.getOne)
// router.get("/pizza", productController.getAllPizza)
// router.delete("/", productController.delete)

module.exports = router