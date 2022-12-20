const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: String,
    admin: Boolean,
    passworod: String,
    email: String,
    badges: [],
    tasksDone: Number,
    hoursWorked: Number,
    projectsInvolved: Number,
    HoursForTheDay: Number
});

const worker = mongoose.model('tbl_workers', workerSchema);

module.exports = worker;