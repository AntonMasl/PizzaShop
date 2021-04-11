const Router = require('express')
const router = new Router()
const pizzaController = require('../controllers/pizzaController')
const upload = require('../middleware/upload')


const Category = require('../models/Category')


router.post("/", upload.single('image'), pizzaController.create) //single() - загружаем всего лишь один файл - image -поле которое отправляем
router.get("/", pizzaController.getAll)
router.get('/:id',pizzaController.getOne)
router.delete("/", pizzaController.delete)

module.exports = router