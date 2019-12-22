const mongoose = require('mongoose'),
    Schema = require('mongoose').Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);