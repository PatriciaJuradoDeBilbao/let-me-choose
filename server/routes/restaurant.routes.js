const express = require('express')
const router = express.Router()

const Restaurant = require('../models/Restaurant.model')
const Comment = require('../models/Comment.model')
const User = require('../models/user.model')
const ensureLogin = require('connect-ensure-login')

// list all 
router.get('/list', (req, res, next) => {
    Restaurant.find()
    .then(data => res.json(data))
    .catch(err => new Error(err))
})

// detail
router.get('/detail/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
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
    .catch(err => new Error(err))
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

// edit
router.post('/edit/:id', ensureLogin.ensureLoggedIn(), (req,res,next) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(err => next(new Error(err)))

})

// comments 

// add 
router.post('/newComment', (req, res, next) => {
  const {rating, content} = req.body
    const newComment = {
       rating,
       content,
        creator: req.user._id
    }
    console.log(newComment)
    Comment.create(newComment)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})


// delete 
router.get('comment/:id/delete', (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id, {new: true})
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})


//edit


module.exports = router