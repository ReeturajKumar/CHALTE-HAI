const express = require('express');
const { createReview } = require('../controllers/reviewController');


//object
const router = express.Router()


router.post('/:tourId', createReview)



module.exports = router