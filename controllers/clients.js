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
    const clientToCreate = new client ({
        name: req.body.name,
        contact: req.body.contact,
        desc: req.body.desc
    })
    
    client.find({name: req.body.name}, function (err, client) {
        if (err) {
            res.status(400).send(err); 
        }

        if( client.length > 0 ) {
            res.status(406).send("Duplicated Client"); 
        } else {
            clientToCreate.save(function (err, newTeam) {
                if (err) {
                    res.status(400).send(err); 
                }
                res.status(200).json("Registered Team"); 
            })
        }
    })
}

const updateClient= (req, res) => {
    client.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        if (result) {
            res.status(200).send(`client id:${req.params.id}: change made successfully`);
        }
        else {
            res.status(404).send('not found')
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const deleteClient= (req, res) => {
    client.findByIdAndDelete(req.params.id).then((result) => {
        if (result) {
            res.status(200).send(`client name:${req.params.id} successfully deleted`)
        } else {
            res.status(404).send('client not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllClients = getAllClients;
exports.getOneClient = getOneClient;
exports.createClient = createClient;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;