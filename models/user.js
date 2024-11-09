const bcrypt = require('bcryptjs');
const { poolConnect } = require('../config/db');

class User {
    static async findByEmail(email) {
        await poolConnect;
        const request = pool.request();
        const result = await request
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');
        return result.recordset[0];
    }

    static async createUser(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await poolConnect;
        const request = pool.request();
        await request
            .input('username', sql.NVarChar, username)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, hashedPassword)
            .query('INSERT INTO Users (username, email, password) VALUES (@username, @email, @password)');
    }
}
module.exports = User;
