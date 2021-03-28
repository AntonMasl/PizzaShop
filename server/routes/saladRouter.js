const Router = require('express')
const router = new Router()
const saladController = require('../controllers/saladController')
const upload = require('../middleware/upload')

const Category = require('../models/Category')

router.post("/", upload.single('image'), saladController.create) //single() - загружаем всего лишь один файл - image -поле которое отправляем
router.get("/", saladController.getAll)
router.get('/:id',saladController.getOne)
router.delete("/", saladController.delete)

module.exports = router