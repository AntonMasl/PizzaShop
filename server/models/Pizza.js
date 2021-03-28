const {Schema, model} = require('mongoose')

const Pizza = new Schema({
    name: {type: String, unique: true, required: true},
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    imageSrc:{
        type: String,
    },
    diameter: {
        small: {
            type: Number,
            default: 25
        },
        middle: {
            type: Number,
            default: 32
        },
        big: {
            type: Number,
            default: 40
        }
    },
    weightOnTraditionalDough: {
        //type: [Number],
        small: {
            type: Number,
            required: true
        },
        middle: {
            type: Number,
            required: true
        },
        big: {
            type: Number,
            required: true
        }
    },
    weightOnSmallDough: {
        small: {
            type: Number,
            required: true
        },
        middle: {
            type: Number,
            required: true
        },
        big: {
            type: Number,
            required: true
        }
    },
    price: {
        small: {
            type: Number,
            required: true
        },
        middle: {
            type: Number,
            required: true
        },
        big: {
            type: Number,
            required: true
        }
    },
    foodValue: {
        energyValue: {type: Number},
        proteins: {type: Number},
        fatСontent: {type: Number},
        carbohydrates: {type: Number}
    },
    description: {type: String}
})

module.exports = model('Pizza', Pizza)