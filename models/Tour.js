const mongoose = require('mongoose')
const tourSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        person: {
            type: Number,
            required: true,
        },
        reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Reviews",
        }
    ],
    featured: {
        type: Boolean,
        default: false,
    },
    },
    {timestamps: true}
);

const Tour = mongoose.model("Tour",tourSchema);

module.exports = Tour;