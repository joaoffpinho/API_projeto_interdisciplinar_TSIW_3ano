const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        unique: true
    },
});

const client = mongoose.model('tbl_clients', clientSchema );

module.exports = client;