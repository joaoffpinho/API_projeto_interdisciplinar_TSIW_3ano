const utilities = require('../utilities/utilities')
const project = require("../models/projects");
const bcrypt = require('bcrypt');

const getAllProjects = (req, res) => {
    project.find().then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const getOneProject = (req, res) => {
    project.findOne(req.params.name).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const createProject = (req, res) => {    
    project.find({
        name: req.body.name
    }).then((result) => {
        if(result.length > 0) {
            res.status(406).send('duplicated')
        } else {
            const project = new Team ({
                client: req.body.client,
                name: req.body.name,
                manager: req.body.manager,
                desc: req.body.desc,
            })
        
            project.save().then((result)=>{
                res.status(200).json(result)
            }).catch((err)=> {
                res.status(400).send('error')
            })
        }
    }).catch((error) => {
        res.status(400).send('error')
    })
} 

// const updateProject = (req, res) => {
//     project.find(req.params.name, req.body).then((result) => {
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

const deleteProject = (req, res) => {
    project.findOneAndDelete({name: req.params.name}).then((result) => {
        if (result) {
            res.status(200).send(`team title:${req.params.name} successfully deleted`)
        } else {
            res.status(404).send('user not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllProjects = getAllProjects; 
exports.getOneProject = getOneProject; 
exports.createProject = createProject;
// exports.updateProject = updateProject;
exports.deleteProject = deleteProject;