const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    client: {
        type: String,
        required: true
    },
    manager: {
        type: String,
        required: true
    },
    workers: [{
        id: String,
    }]
});

const project = mongoose.model('tbl_projects', projectSchema  );

module.exports = project;