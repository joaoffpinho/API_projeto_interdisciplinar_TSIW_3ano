const team = require("../models/teams");

const getAllTeams= (req, res) => {
    team.find().then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const getOneTeam= (req, res) => {
    team.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const createTeam = (req, res) => {
    const teamToCreate = new team ({
        title: req.body.title,
        manager_id: req.body.manager_id,
        desc: req.body.desc
    })
    
    team.find({ title: req.body.title }, function (err, team) {
        if (err) {
            res.status(400).send(err); 
        }

        if( team.length > 0 ) {
            res.status(406).send("Duplicated Team"); 
        } else {
            teamToCreate.save(function (err, newTeam) {
                if (err) {
                    res.status(400).send(err); 
                }
                res.status(200).json("Registered Team"); 
            })
        }
    })
}

const addWorker = (req, res) => {
    team.findById(req.params.id, req.body).then((result) => {
        
        let workerFound = false;
        result.workers.forEach(worker => {
            if (worker.worker_id === req.body.worker_id){
                workerFound = true
            }
        })

        if (workerFound){
            return res.status(400).json({ message: "Already in the team."});
        } else {
                team.findByIdAndUpdate(req.params.id,
                    { $push:
                        { workers: {
                            worker_id: req.body.worker_id
                    }}
                    },
                    { new: true, useFindAndModify: false })
                    
                res.status(201).json({ success: true, msg: "New worker added team."});
        }
        
        

    }).catch((error) => {
        res.status(400).send(error);
    })
}; 

const updateTeam = (req, res) => {
    team.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        if (result) {
            res.status(200).send(`team id:${req.params.id}: change made successfully`);
        }
        else {
            res.status(404).send('team not found')
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const deleteTeam = (req, res) => {
    team.findByIdAndDelete(req.params.id).then((result) => {
        if (result) {
            res.status(200).send(`team title:${req.params.id} successfully deleted`)
        } else {
            res.status(404).send('team not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllTeams = getAllTeams;
exports.addWorker = addWorker;
exports.getOneTeam = getOneTeam;
exports.createTeam = createTeam;
exports.deleteTeam = deleteTeam;
exports.updateTeam = updateTeam;