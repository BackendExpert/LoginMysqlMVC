const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
            
        }
        else{
            return res.json({ Error: "Error White Hashing Password" })
        }
    }
}

module.exports = authController;
