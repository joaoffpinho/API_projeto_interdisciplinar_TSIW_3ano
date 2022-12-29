const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    workers: [], /*id's*/
    desc: String
});

const team = mongoose.model('tbl_teams', teamSchema  );

module.exports = team;