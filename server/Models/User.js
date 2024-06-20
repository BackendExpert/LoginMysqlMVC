const connection = require('../config/connection')

const User = {
    SignUp: (userData, callback) => {
        db.query('INSERT INTO users SET ?', userData, callback);
    },
}

module.exports = User