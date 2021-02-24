require('dotenv').config()
const express = require('express')
const cors = require('cors')
//const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const router = require('./routes/index')

const PORT = process.env.PORT || 3000
const DATABASE = process.env.DataBase

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


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