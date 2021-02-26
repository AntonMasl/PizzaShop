const {Schema, model} = require('mongoose')

const Pizza = new Schema({
    name: {type: String, unique: true, required: true},
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
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
    // typeOfDough: {
    //     slim:{
    //         type: String,
    //         default: 'тонкое'
    //     },
    //     traditional
    //     default: ["тонкое", "традиционное"]
    // },
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
        belki: {type: Number},
        fatСontent: {type: Number},
        carbohydrates: {type: Number}
    },
    description: {type: String}
})

module.exports = model('Pizza', Pizza)