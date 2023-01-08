const utilities = require('../utilities/utilities')
const team = require("../models/teams");
const bcrypt = require('bcrypt');

const getAllWorkers = (req, res) => {
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

const getOneWorker= (req, res) => {
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
    team.find({
        title: req.body.title
    }).then((result) => {
        if(result.length > 0) {
            res.status(406).send('duplicated')
        } else {
            const team = new Team ({
                title: req.body.title,
                workers: [req.body.workers],
                desc: req.body.desc,
            })
        
            team.save().then((result)=>{
                res.status(200).json(result)
            }).catch((err)=> {
                res.status(400).send('error')
            })
        }
    }).catch((error) => {
        res.status(400).send('error')
    })
} 

// const updateTeam = (req, res) => {
//     team.find(req.params.title, req.body).then((result) => {
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

exports.getAllWorkers = getAllWorkers;
exports.getOneWorker = getOneWorker;
exports.createTeam = createTeam;
exports.deleteTeam = deleteTeam;