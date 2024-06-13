// models/Adoption.js
const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
    dogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dog', required: true },
    adopterName: { type: String, required: true },
    adopterEmail: { type: String, required: true },
    adopterPhone: { type: String, required: true }, // Added adopterPhone field
    adoptionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', adoptionSchema);
