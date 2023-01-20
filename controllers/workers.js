const utilities = require('../utilities/utilities')
const worker = require("../models/workers");
const badge = require("../models/badges");
const bcrypt = require('bcrypt');


const login = (req, res) => {

    worker.find({email: req.body.email}, function (err, worker) {
        if (err) {
            res.status(400).send(err); 
        }

        if(worker.length > 0) {
            bcrypt.compare(req.body.password, worker[0].password).then(function(result) {
                if(result) {
                    utilities.generateToken({worker: req.body.name, _id: req.body._id, admin: req.body.admin}, (token) => {
                        res.status(200).json(token);
                    })
                } else {
                    res.status(401).send("Not Authorized"); 
                }
            });

        } else {
            res.status(401).send("Not Authorized");
        }
    })
}

const register = (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            
            const workerToCreate = new worker({ 
                name: req.body.name, 
                email: req.body.email, 
                password: hash
            });

            worker.find({email: req.body.email}, function (err, worker) {
                if (err) {
                    res.status(400).send(err); 
                }

                if( worker.length > 0 ) {
                    res.status(406).send("Duplicated Worker"); 
                } else {
                    workerToCreate.save(function (err, newWorker) {
                        if (err) {
                            res.status(400).send(err); 
                        }
                        res.status(200).json("Registered Worker"); 
                    })
                }
            })
        });
    });
}

const getAllWorkers = (req, res) => {
    worker.find().then((result) => {
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
    worker.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const updateWorker = (req, res) => {
    worker.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        if (result) {
            res.status(200).send(`Worker id: ${req.params.id} change made successfully`);
        }
        else {
            res.status(404).send('not found')
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const deleteWorker = (req, res) => {
    worker.findByIdAndDelete(req.params.id).then((result) => {
        if (result) {
            res.status(200).send(`worker id:${req.params.id} successfully deleted`)
        } else {
            res.status(404).send('user not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const addBadge = (req, res) => {
    worker.findByIdAndUpdate(req.params.id, { $addToSet: { badges : req.body.badge_id}}).then((result) => {
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

const removeBadge = (req, res) => {
    worker.findByIdAndUpdate(req.params.id, {$pull: { badges :  req.body.badge_id}}).then((result) => {
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

const getSomeBadges = (req, res) => {
    worker.findById(req.params.id).select('workers')
    .then((result) => {
        if (result) {
            badge.find({
                _id: {
                    $in: result.badges
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

exports.login = login; 
exports.addBadge = addBadge;
exports.removeBadge = removeBadge;
exports.getAllWorkers = getAllWorkers;
exports.getSomeBadges = getSomeBadges;
exports.getOneWorker = getOneWorker;
exports.updateWorker = updateWorker;
exports.deleteWorker = deleteWorker;
exports.register = register;