const express = require('express')
const { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getFeaturedTour, getTourCount } = require('../controllers/tourController')

//object
const router = express.Router()


//create new tour
router.post('/', createTour)

//update Tour
router.put('/:id', updateTour)

//delete Tour
router.delete('/:id', deleteTour)

//Single Tour
router.get('/:id', getSingleTour)


//All Tour
router.get('/', getAllTour)


//get featured Tour
router.get("/search/getFeaturedTours" , getFeaturedTour)


//get Tour Count
router.get("/search/getTourCount" , getTourCount)

module.exports = router