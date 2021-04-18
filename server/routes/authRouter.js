const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const {check} = require("express-validator") //проверяем валидность введенных данных
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty()
], authController.registration)
router.post('/login', authController.login)
router.get('/users',roleMiddleware(["ADMIN"]), authController.getUsers)
router.get('/auth',authMiddleware,authController.auth)

module.exports = router