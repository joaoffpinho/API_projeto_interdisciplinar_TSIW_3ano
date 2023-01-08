const utilities = require('../utilities/utilities')
const client = require("../models/clients");
const bcrypt = require('bcrypt');

const getAllClients= (req, res) => {
    client.find().then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const getOneClient= (req, res) => {
    client.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const createClient = (req, res) => {    
    client.find({
        name: req.body.name
    }).then((result) => {
        if(result.length > 0) {
            res.status(406).send('duplicated')
        } else {
            const client = new Client ({
                name: req.body.name,
                telefone: req.body.telefone,
            })
        
            client.save().then((result)=>{
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

const deleteClient= (req, res) => {
    client.findOneAndDelete({name: req.params.name}).then((result) => {
        if (result) {
            res.status(200).send(`client name:${req.params.name} successfully deleted`)
        } else {
            res.status(404).send('user not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllClients = getAllClients;
exports.getOneClient = getOneClient;
exports.createClient = createClient;
exports.deleteClient = deleteClient;