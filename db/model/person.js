const mongoose = require('mongoose');

const Person = new mongoose.Schema({
    arroba: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Person", Person);
