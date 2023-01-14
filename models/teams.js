const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    manager_id:{
        type: String,
        required: true
    },
    workers: [{
        worker_id: String
    }],
    desc: {
        type: String
    }
});

const team = mongoose.model('tbl_teams', teamSchema  );

module.exports = team;