const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    tasksDone: {
        type: Number,
        default: 0
    },
    hoursWorked: {
        type: Number,
        default: 0
    },
    projectsInvolved: {
        type: Number,
        default: 0
    },
    HoursForTheDay: {
        type: Number,
        default: 0
    },
    badges: [{
        name: String,
        rewardPoints: Number
    }],
});

const worker = mongoose.model('tbl_workers', workerSchema);

module.exports = worker;