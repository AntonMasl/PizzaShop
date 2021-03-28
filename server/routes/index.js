const Router = require('express')
const router = new Router()

const pizzaRouter = require('./pizzaRouter')
const categoryRouter = require('./categoryRouter')
const saladRouter = require('./saladRouter')

router.use('/pizza', pizzaRouter)
router.use('/category', categoryRouter)
router.use('/salad', saladRouter)

module.exports = router