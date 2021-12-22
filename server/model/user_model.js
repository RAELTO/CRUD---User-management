const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('users', schema);

module.exports = Userdb;