const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    client: String, /*id*/
    name: String,
    manager: String, /*id*/
    workers: [], /*id's*/
    tasks: [], /*id & name & worker's id & desc & TimeSpent & date*/
});

const project = mongoose.model('tbl_clients', projectSchema  );

module.exports = project;