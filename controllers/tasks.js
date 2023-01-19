const task = require("../models/tasks");
const worker = require("../models/workers");

const getAllUserTasks = (req, res) => {
    task.find({
        worker_id: req.params.id
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

const getOneTask= (req, res) => {
    task.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const createTask = (req, res) => {   
    const taskToCreate = new task ({
        title: req.body.title,
        worker_id: req.body.worker_id,
        project_id: req.body.project_id,
        desc: req.body.desc,
        timeSpent: req.body.timeSpent,
    })

    task.find({ title: req.body.title }, function (err, task) {
        if (err) {
            res.status(400).send(err); 
        }

        taskToCreate.save(function (err, newTask) {
            if (err) {
                res.status(400).send(err); 
            }
            worker.findByIdAndUpdate(
                req.body.worker_id, 
                { $inc: { 
                    hoursWorked: req.body.timeSpent, 
                    tasksDone: 1 , 
                    HoursForTheDay: req.body.timeSpent} }).then((result) => {
                if (result) {
                    res.status(200).send(`Task registerd`);
                }
                else {
                    res.status(404).send('worker not found')
                }
            }).catch((error) => {
                res.status(400).send(error);
            })
        })
    })
}

const updateTask = (req, res) => {
    task.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        if (result) {
            res.status(200).send(`task id:${req.params.id}: change made successfully`);
        }
        else {
            res.status(404).send('not found')
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

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
exports.getOneTask = getOneTask;
exports.createTask = createTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;