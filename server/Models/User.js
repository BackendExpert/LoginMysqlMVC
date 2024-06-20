const connection = require('../config/connection')

const User = {
    create: (userData, callback) => {
        db.query('INSERT INTO users SET ?', userData, callback);
    },
    findByUsernameOrEmail: (username, email, callback) => {
        const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
        db.execute(query, [username, email], callback);
    }
}

module.exports = User