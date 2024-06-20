const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
    SignUp: async (req, res) => {
        console.log(req.body)
        // const {
        //     username,
        //     email,
        //     password,
        // } = req.body;
    }
}

module.exports = authController;
