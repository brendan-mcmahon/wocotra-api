const { pool } = require("../config");

login = (username, next) => {
    const queryText = "SELECT * FROM users where name = $1"

    pool.query(queryText, [username], (err, res) => {
        if (err) throw err;
        next(res.rows);
    })
}

getAllUsers = (next) => {
    const queryText = "SELECT * FROM users";

    pool.query(queryText, (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

createUser = (user, next) => {
    const queryText = `INSERT INTO users(name)
        VALUES ($1)
        returning *;`;

    pool.query(queryText, [user.name], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

module.exports = {
    login,
    getAllUsers,
    createUser
}