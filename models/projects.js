const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    client: String, /*id*/
    name: String,
    manager: String, /*id*/
    workers: [{
        name: String, /*and id */
    }],
    tasks: [{
        title: String,
        worker: String,
        desc: String,
        TimeSpent: Number,
    }], /*id & name & worker's id & desc & TimeSpent & date*/
});

const project = mongoose.model('tbl_projects', projectSchema  );

module.exports = project;