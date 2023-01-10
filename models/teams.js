const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    workers: [{
        id: String
    }],
    desc: {
        type: String
    }
});

const team = mongoose.model('tbl_teams', teamSchema  );

module.exports = team;