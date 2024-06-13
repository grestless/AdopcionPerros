// models/Dog.js

const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Dog', dogSchema);
