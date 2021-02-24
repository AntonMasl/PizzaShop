const Router = require('express')
const router = new Router()
const pizzaController = require('../controllers/pizzaContoller')

router.post("/", pizzaController.create)
router.get("/", pizzaController.getAll)
router.delete("/",pizzaController.delete)

module.exports = router