const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: [],
    reqAchivement: [{
        points: Number,
        requisits: String, /**/
    }], /*number & type(hours. tasks, et cetera)*/
    rewardPoints: Number,
});

const badge = mongoose.model('tbl_badges', badgeSchema );

module.exports = badge