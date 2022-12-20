const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    client: String, /*id*/
    name: String,
    manager: String, /*id*/
    workers: [], /*id's*/
    tasks: [], /*id & name & worker's id & desc & TimeSpent & date*/
});

const badge = mongoose.model('tbl_clients', badgeSchema );

module.exports = badge ;