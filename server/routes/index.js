const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
// const saladRouter = require('./saladRouter')

router.use('/product', productRouter)
router.use('/category', categoryRouter)
// router.use('/salad', saladRouter)

module.exports = router