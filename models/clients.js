const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    contact: Number,
});

const client = mongoose.model('tbl_clients', clientSchema );

module.exports = client;