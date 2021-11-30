var express = require('express');
var router = express.Router();
const { login, getAllUsers, createUser } = require('../repositories/user');

router.route('/login').post((req, res) => {
    console.log('logging in');
    login(req.body.username, (rows => {
        if (rows.length < 1)
            res.status(404).send();
        if (rows.length == 1)
            res.json(rows[0]).send(); 
    }))
});

router.route('').get((req, res) => {
    getAllUsers((users) => res.status(200).json(users));
});

router.route('').post((req, res) => {
    createUser(req.body, (user) => res.status(200).json(user));
});

module.exports = router;