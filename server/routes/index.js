const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const authRouter = require('./authRouter')
// const authRouter = require("./authRouter")
// const saladRouter = require('./saladRouter')

router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/auth', authRouter)
// router.use('/basket', basketRouter)
// router.use('./auth', authRouter)
// router.use('/salad', saladRouter)

module.exports = router