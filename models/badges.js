const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: [],
    reqPoints: {
        type: Number,
        required: true
    },
    requisits: {
        type: String,
        required: true
    },
    rewardPoints: {
        type: Number,
        required: true
    },
});

const badge = mongoose.model('tbl_badges', badgeSchema );

module.exports = badge