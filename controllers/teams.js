const team = require("../models/teams");
const worker = require("../models/workers")

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
    team.findOneAndUpdate(req.params.id, { $addToSet: { workers: req.body.worker_id}},{new: true})
    .then((result) => {
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

const removeWorker = (req, res) => {
    team.findByIdAndUpdate(req.params.id, { $pull: { workers : req.body.worker_id}}).then((result) => {
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

const getSomeWorkers = (req, res) => {
    team.findById(req.params.id).select('workers')
    .then((result) => {
        if (result) {
            worker.find({
                _id: {
                    $in: result.workers
                }}).then((workers) => {
                if(workers) {
                    res.status(200).json(workers);
                } else {
                    res.status(404).send('not found')
                }
            }).catch((err) => {
                res.status(400).send('error')
            })
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })


}

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
};

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
exports.getSomeWorkers = getSomeWorkers;
exports.addWorker = addWorker;
exports.removeWorker = removeWorker;
exports.getOneTeam = getOneTeam;
exports.createTeam = createTeam;
exports.deleteTeam = deleteTeam;
exports.updateTeam = updateTeam;