const {Schema, model} = require('mongoose')

const Salad = new Schema({
    name: {type: String, unique: true, required: true},
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    foodValue: {
        energyValue: {type: Number},
        proteins: {type: Number},
        fatСontent: {type: Number},
        carbohydrates: {type: Number}
    },
    description: {type: String}
})

module.exports = model('Salad', Salad)