const express = require('express')
const router = express.Router()

const Restaurant = require('../models/Restaurant.model')
const Comment = require('../models/Comment.model')
const User = require('../models/user.model')
const ensureLogin = require('connect-ensure-login')

//likes 
router.post('/likeRestaurant', ensureLogin.ensureLoggedIn(), (req, res, next) => {

    const {user, restaurant} = req.body
   let updatedRestaurant = Restaurant.findByIdAndUpdate(restaurant, { $push: {likes: user} }, { new: true })
   let updatedUser = User.findByIdAndUpdate(user, { $push: { myFavs: restaurant } }, { new: true })

   Promise.all([updatedUser, updatedRestaurant])
   .then(data => res.json(data))
   .catch(err => next(new Error(err)))
})

// wishlist
router.post('/wishRestaurant', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    console.log('entra en wishrestaurant', req.body)
    const {user, restaurant} = req.body
    let updatedRestaurant = Restaurant.findByIdAndUpdate(restaurant, { $push: { wish: user } }, { new: true})
    let updatedUser = User.findByIdAndUpdate(user, { $push: { myWishList: restaurant } }, { new: true })

    Promise.all([updatedUser, updatedRestaurant])
    .then(data => res.json(data))
    .catch(err => next(new Error(err)))
})


// list all 
router.get('/list', (req, res, next) => {
    Restaurant.find()
    .then(data => res.json(data))
    .catch(err => next(new Error(err)))
})

// detail
router.get('/detail/:id', (req, res, next) => {
    Restaurant.findById(req.params.id)
    .populate({
        path: 'myReviews',
        model: 'Comment',
        populate: {
            path: 'creator',
            model: 'User'
        }
    })
    .then(data => res.json(data))
    .catch(err => next(new Error(err)))
})

// add
router.post('/new', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Restaurant.create(req.body)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})


// delete
router.get('/delete/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Restaurant.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})


// comments 

// add 
router.post('/newComment', (req, res, next) => {
  const {rating, content, myRestaurant} = req.body
    const newComment = {
        rating,
        content,
        creator: req.user._id,
        myRestaurant,
    }
    Comment.create(newComment)
        .then(createdComment => {
            console.log("creado el comentario")
            return Restaurant.findByIdAndUpdate(myRestaurant, {$push: {myReviews: createdComment._id}},{new:true})

        })
        .then(data=> res.json(data))
        .catch(err => next(new Error(err)))
})


// delete 
router.get('/deleteComment/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})





module.exports = router