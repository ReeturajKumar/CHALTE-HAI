const express = require('express');
const { createBooking, getBooking, getAllBooking } = require('../controllers/bookingController');


//object
const router = express.Router()


router.post('/', createBooking)
router.get("/:id" , getBooking)
router.get("/" , getAllBooking)


module.exports = router