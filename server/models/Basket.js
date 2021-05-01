const {Schema, model} = require('mongoose')

const Basket = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: []
})

module.exports = model('Basket', Basket)