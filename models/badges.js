const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: [],
    reqAchivement: [{
        reqPoints: Number, /* number */
        requisits: String, /* type(hours. tasks, et cetera) */
    }],
    rewardPoints: {
        type: Number,
        required: true
    },
});

const badge = mongoose.model('tbl_badges', badgeSchema );

module.exports = badge