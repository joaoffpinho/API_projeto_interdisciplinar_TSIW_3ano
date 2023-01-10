const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: [],
    reqAchivement: [{
        reqPoints: Number, /* quantidade necessaria */
        requisits: String, /* tasksDone, hoursWorked, projectsInvolved so estes 3 por enquanto */
    }],
    rewardPoints: {
        type: Number,
        required: true
    },
});

const badge = mongoose.model('tbl_badges', badgeSchema );

module.exports = badge