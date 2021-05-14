const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/drhetggfq/image/upload/v1620915553/Let-me-choose/abstract-847_d5ubfh.png'
    },
    myReviews: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    myRestaurant: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}],
    myFavs: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}],
    myWishList: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}] 

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User