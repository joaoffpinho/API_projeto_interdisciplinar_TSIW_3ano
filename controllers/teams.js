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
        workers: [req.body.workers],
        desc: req.body.desc,
    })
    
    team.find({ title: req.body.title }, function (err, team) {
        if (err) {
            res.status(400).send(err); 
        }

        if( team.length > 0 ) {
            res.status(406).send("Duplicated Worker"); 
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

const updateTeam = (req, res) => {
    team.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        if (result) {
            res.status(200).send(`team id:${req.params.id}: change made successfully`);
        }
        else {
            res.status(404).send('not found')
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const deleteTeam = (req, res) => {
    team.findOneAndDelete({title: req.params.title}).then((result) => {
        if (result) {
            res.status(200).send(`team title:${req.params.title} successfully deleted`)
        } else {
            res.status(404).send('user not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllTeams = getAllTeams;
exports.getOneTeam = getOneTeam;
exports.createTeam = createTeam;
exports.deleteTeam = deleteTeam;
exports.updateTeam = updateTeam;