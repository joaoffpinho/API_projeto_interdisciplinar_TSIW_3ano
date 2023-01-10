const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        worker_id: {
            type: String,
            required: true
        },
        project_id :{
            type: String,
            required: true
        },
        desc: {
            type: String
        },
        timeSpent: {
            type: Number,
            required: true
        },
});
 
const task = mongoose.model('tbl_tasks', taskSchema  );

module.exports = task;