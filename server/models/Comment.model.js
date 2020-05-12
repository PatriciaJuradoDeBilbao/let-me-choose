const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({

    content: String,
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    // myRestaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'}
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment