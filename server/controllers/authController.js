const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs'); //хеширование пароля
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator') //проверяем валидность введенных данных - функция будет возвращать ошибки в следствии валидации
const {secret} = require("../config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} ) //return ТОКЕН ---- payload-данные которые хотим спрятать в токен и secret - ключ , по которому расшифровывается токен
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req) //<-эта функция будет возвращать ошибки в следствии валидации
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const {username,name, surname, email, password} = req.body;
            const candidate = await User.findOne({username}) //ищем пользователя
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким логином уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7); //хеширование пароля, чтобы в базе данных не хранились пароли в открытом виде
            const userRole = await Role.findOne({value: "USER"}) //получаем роль
            const user = new User({
                username,
                name,surname,
                email,
                password: hashPassword,
                roles: [userRole.value]}) //создаем пользователя
            await user.save() //сохраняем пользователя
            return res.json({message: "Пользователь успешно зарегистрирован"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            console.log(req.body)
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `Введен неверный логин`})
            }
            console.log(password)
            console.log(user.password)
            const validPassword = bcrypt.compareSync(password, user.password) //функция сравнивает обычный пароль и захешированный
            console.log(validPassword, typeof validPassword)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()
