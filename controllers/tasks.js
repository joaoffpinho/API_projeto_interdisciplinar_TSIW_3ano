const utilities = require('../utilities/utilities')
const task = require("../models/tasks");
const bcrypt = require('bcrypt');


const getAllUserTasks = (req, res) => {
    task.find({
        worker: req.body.worker
    }).then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const createTask = (req, res) => {    
    const task = new task ({
        title: req.body.title,
        workers: req.body.workers,
        desc: req.body.desc,
        timeSpent: req.body.timeSpent,
    })

    team.save().then((result)=>{
        res.status(200).json(result)
    }).catch((err)=> {
        res.status(400).send('error')
    })
}

// const updateTask = (req, res) => {
//     task.find(req.params.id, req.body).then((result) => {
//         if (result) {
//             res.status(200).send(`team id:${req.params.id}: change made successfully`);
//         }
//         else {
//             res.status(404).send('not found')
//         }
//     }).catch((error) => {
//         res.status(400).send(error);
//     })
// }

const deleteTask = (req, res) => {
    task.findOneAndDelete({id: req.params.id}).then((result) => {
        if (result) {
            res.status(200).send(`team title:${req.params.name} successfully deleted`)
        } else {
            res.status(404).send('user not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllUserTasks = getAllUserTasks;
exports.createTask = createTask;
// exports.updateTask = updateTask;
exports.deleteTask = deleteTask;