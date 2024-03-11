const express = require('express');
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const path = require('path');


//config dotenv
dotenv.config();


//mongodb connection
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser())

//routes
app.use("/api/v1/user", require("./routes/userRoute"))
app.use("/api/v1/tours", require("./routes/tourRoute"))
app.use("/api/v1/review", require("./routes/review"))
app.use("/api/v1/booking", require("./routes/booking"))




//static file access here 
app.use(express.static(path.join(__dirname, './frontend/build')))
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

//PORT
const port = process.env.PORT || 8080;



//listen port
app.listen(port, () => {
    console.log(`Server is Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
    );
});