const express = require('express')
const router = express.Router()

const Restaurant = require('../models/Restaurant.model')
const Comment = require('../models/Comment.model')

// list all 
router.get('/list', (req, res, next) => {
    Restaurant.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
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
    .catch(err => console.log(err))
})

// add
router.post('/new', (req, res, next) => {
    Restaurant.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

// delete
router.get('/:id/delete', (req, res, next) => {
    Restaurant.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

module.exports = router