const express = require('express')
const authController = require('../Controller/authController')

const router = express.Router()

router.post('/SignUp', authController.SignUp)
router.post('/SignIn')

module.exports = router