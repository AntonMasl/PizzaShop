const {Schema, model} = require('mongoose')

const Pizza = new Schema({
    name: {type: String, unique: true, required: true},
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    diameter: {
        type: [Number],
        default: [25,32,40]
    },
    typeOfDough: {
        type: [String],
        default: ["тонкое", "традиционное"]
    },
    weightOnTraditionalDough: {
        type: [Number],
        required: true
    },
    weightOnThinDough: {
        type: [Number],
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
    foodValue: {
        energyValue: {type: Number},
        belki: {type: Number},
        fatСontent: {type: Number},
        carbohydrates: {type: Number}
    },
    description: {type: String}
})

module.exports = model('Pizza', Pizza)