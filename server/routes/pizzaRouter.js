const Router = require('express')
const router = new Router()
const pizzaController = require('../controllers/pizzaContoller')
const upload = require('../middleware/upload')


const Category = require('../models/Category')


router.post("/", upload.single('image'), pizzaController.create) //single() - загружаем всего лишь один файл - image -поле которое отправляем
router.get("/", pizzaController.getAll)
router.delete("/", pizzaController.delete)
router.get("/category",async (req, res) => {
    try {
        const allCategory = await Category.find().populate('category')
        res.json(allCategory)
    } catch (error) {
        res.json({"message": "Error"})
    }
})

module.exports = router