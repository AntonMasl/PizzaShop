const {Schema, model} = require('mongoose')
const Product = new Schema({
    name: {type: String, unique: true, required: true},
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    imageSrc: {type: String,},
    diameter: {
        small: {type: Number},
        middle: {type: Number},
        big: {type: Number}
    },
    weightOnTraditionalDough: {
        small: {type: Number},
        middle: {type: Number},
        big: {type: Number}
    },
    weightOnSmallDough: {
        small: {type: Number},
        middle: {type: Number},
        big: {type: Number}
    },
    weight: {type: Number},
    prices: {
        small: {type: Number},
        middle: {type: Number},
        big: {type: Number}
    },
    price: {type: Number},
    foodValue: {
        energyValue: {type: Number},
        proteins: {type: Number},
        fatСontent: {type: Number},
        carbohydrates: {type: Number}
    },
    description: {type: String}
})
module.exports = model('Product', Product)