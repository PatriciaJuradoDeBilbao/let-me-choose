const express = require('express')
const router = express.Router()

const Restaurant = require('./../models/restaurant.model')

// router.get('/getAllCoasters', (req, res, next) => {
//     Coaster.find()
//         .then(data => res.json(data))
//         .catch(err => console.log(err))
// })

// router.get('/getOneCoaster/:id', (req, res, next) => {
//     Coaster.findById(req.params.id)
//         .then(data => res.json(data))
//         .catch(err => console.log(err))
// })

// router.post('/postCoaster', (req, res, next) => {
//     Coaster.create(req.body)
//         .then(data => res.json(data))
//         .catch(err => console.log(err))
// })


// list all 
router.get('/restaurants', (req, res, next) => {
    Restaurant.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

// detail
router.get('/restaurants/detail/:id', (req, res, next) => {
    Restaurant.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

//
module.exports = router