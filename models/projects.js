const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    client_id: {
        type: String,
        required: true
    },
    manager_id: {
        type: String,
        required: true
    },
    workers: [{
        worker_id: String,
    }],
    desc: {
        type: String
    }
});

const project = mongoose.model('tbl_projects', projectSchema  );

module.exports = project;