const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User')

const authController = {
    SignUp: async (req, res) => {
        // console.log(req.body)
        const {
            username,
            email,
            password,
        } = req.body;

        const hashPass = await bcrypt.hash(password, 10)

        if(hashPass){
            User.create({
                username: username,
                email: email, 
                password: hashPass, 
                role: "User", 
                create_at: new Date(),
                is_active: 1,
                is_lock: 0
            })
        }
        else{
            return res.json({ Error: "Error White Hashing Password" })
        }
    }
}

module.exports = authController;
