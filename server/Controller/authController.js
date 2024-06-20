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

        User.findByUsernameOrEmail(username, email, async (err, result) => {
            if(err) throw err

            if(result.length > 0){
                return res.json({ Error: "User is Already Exists" })
            }
            else{
                const hashPass = await bcrypt.hash(password, 10)
                // console.log(hashPass)
                if(hashPass){
                    const newUser = User.create({
                        username: username,
                        email: email,
                        password: hashPass,
                        role: "User",
                        create_at: new Date(),
                        is_active: 1,
                        is_lock: 0
                    })

                    return res.json({ Status: "Success" })
                }
                else{
                    return res.json({ Error: "Error White Hashing Password" })
                }
            }
        })
    },
    SignIn: (req, res) => {
        console.log(req.body)
    }
}

module.exports = authController;
