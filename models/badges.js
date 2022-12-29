const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: String,
    image: [],
    reqAchivement: [], /*number & type(hours. tasks, et cetera)*/
    rewardPoints: Number,
});

const badge = mongoose.model('tbl_badges', badgeSchema );

module.exports = badge