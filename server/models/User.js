const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : String,
    UserEmail : String,
    password : String,
    role : String,
});

module.exports = mongoose.model('User', userSchema);