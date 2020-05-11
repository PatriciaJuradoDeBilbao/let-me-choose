const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    avatar: String,
    myReviews: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    myRestaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'},
    myFavs: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}],
    myWishList: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}] 

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User