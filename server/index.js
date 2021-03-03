require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/index')
const authRouter = require('./routes/authRouter')
const path = require('path')

const PORT = process.env.PORT || 3000
const DATABASE = process.env.DataBase

const app = express()
app.use(cors())
app.use(express.json()) //парсим JSON с клиента приходящий
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use('/api', router)
app.use('/auth', authRouter)
// app.use('/uploads', express.static('uploads'))
// app.use(express.static(path.resolve(__dirname, 'static')))

const start = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${DATABASE}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()