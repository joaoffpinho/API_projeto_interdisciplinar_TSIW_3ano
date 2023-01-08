const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    manager: {
        type: String,
        required: true
    },
    workers: [{
        name: String,
        id: String,
    }]
});

const project = mongoose.model('tbl_projects', projectSchema  );

module.exports = project;