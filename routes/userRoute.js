const express = require('express')
const { loginController, registerController, authController,} = require('../controllers/userControllers')
const authMiddleware = require('../middlewares/authMiddleware')


//object
const router = express.Router()

//login ||Post
router.post('/login',loginController)
//register ||Post
router.post('/register', registerController)

//AUTH
router.post('/getUserData',authMiddleware, authController)


module.exports = router