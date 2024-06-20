const connection = require('../config/connection')

const User = {
    create: (userData, callback) => {
        db.query('INSERT INTO users SET ?', userData, callback);
    },
}

module.exports = User