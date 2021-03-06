const mongoose = require("mongoose")
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    imageUrl: {
        type: String,
        default: 'https://image.flaticon.com/icons/svg/527/527095.svg'
    },
    name: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['Italiana', 'Asiática', 'Venezolana', 'India', 'Mexicana', 'Mediterránea', 'Saludable', 'Árabe', 'Americana', 'Vegetariana']
    },
    price: {
        type: String,
        enum: ['Asequible(€)', 'Moderado(€€)', 'Caro(€€€)', 'Muy caro(€€€€)']
    },
    loc: {
        street: String,
        coordinates: [Number]
    },
    myReviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    wish: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],



}, {
    timestamps: true
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant