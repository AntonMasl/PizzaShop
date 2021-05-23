const {Schema, model} = require('mongoose')
const Order = new Schema({
    name: {type: String, required: true},
    basket: {
        type: Schema.Types.ObjectId,
        ref: 'Basket',
        required: true
    },
    price: {type: Number, required: true},
    addressDelivery: {type: String, required: true},
    created: {type: String, required: true},
})
module.exports = model('Order', Order)