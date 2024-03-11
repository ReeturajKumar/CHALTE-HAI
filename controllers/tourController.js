
const Tour = require('../models/Tour');



//creating Tour
exports.createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully Created",
            data: savedTour
        });
    } catch (error) {
        console.error("Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


//update tour
exports.updateTour = async(req,res) => {
    const id = req.params.id;
    try {
       const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set: req.body
       }, {new: true})

       res.status(200).json({
        success: true,
        message: "Successfully Updated",
        data: updatedTour
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update",
        });
    }
}

//delete tour
exports.deleteTour = async(req,res) => {
    const id = req.params.id;
    try {
       await Tour.findByIdAndDelete(id);

       res.status(200).json({
        success: true,
        message: "Successfully Deleted",
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to Delete",
        });
    }
}

//getSingle Tour
exports.getSingleTour = async(req,res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(ObjectId(id)).populate("reviews");

       res.status(200).json({
        success: true,
        message: "Successfully Found Single Data",
        data: tour
    });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        });
    }
}


//get all tour
exports.getAllTour = async(req,res) => {

    //for Pagination
    const page = parseInt(req.query.page)
    try {
        const tours = await Tour.find({})
        .populate('reviews')
        .skip(page * 8)
        .limit(8);

        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully Found All Data",
            data: tours
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        });
    }
}



//get Featured Tour
exports.getFeaturedTour = async(req,res) => {

    try {
        const tours = await Tour.find({featured: true}).populate("reviews").limit(8);

        res.status(200).json({
            success: true,
            message: "Successfully Found All Data",
            data: tours
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not Fount",
        });
    }
}


//get Tour Counts
exports.getTourCount = async(req,res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({
            success: true,
            data: tourCount
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to Featch",
        });
    }
}