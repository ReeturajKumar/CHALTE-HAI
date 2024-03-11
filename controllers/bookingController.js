const Booking = require('../models/Booking');
const userModel = require('../models/userModel')

// Create Booking
exports.createBooking = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        const user = await userModel.findOne({_id: req.body.tourName.userId})

        res.status(201).json({
            success: true,
            message: "Your Tour is Booked Successfully",
            data: savedBooking,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create booking",
        });
    }
};

// Get Single booking
exports.getBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking found successfully",
            data: book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// Get all booking
exports.getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find();

        res.status(200).json({
            success: true,
            message: "All Bookings Fetched",
            data: books,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
