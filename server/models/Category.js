const {Schema, model} = require('mongoose')
const Category = new Schema({
    name: {type: String, unique: true, required: true}
})
module.exports = model('Category', Category)