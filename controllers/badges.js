const utilities = require('../utilities/utilities')
const badge = require("../models/badges");
const bcrypt = require('bcrypt');

const getAllBadges = (req, res) => {
    badge.find().then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const getOneBadge= (req, res) => {
    badge.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const createBadge = (req, res) => {
    const badgeToCreate = new badge ({
        name: req.body.name,
        image: req.body.image,
        reqPoints: req.body.reqPoints,
        requisits: req.body.requisits,
        rewardPoints: req.body.rewardPoints,
    })
    
    badge.find({ name: req.body.name}, function (err, badge) {
        if (err) {
            res.status(400).send(err); 
        }

        if( badge.length > 0 ) {
            res.status(406).send("Duplicated Badge"); 
        } else {
            badgeToCreate.save(function (err, newBadge) {
                if (err) {
                    res.status(400).send(err); 
                }
                res.status(200).json("Registered Badge"); 
            })
        }
    })
}

const deleteBadge = (req, res) => {
    badge.findByIdAndDelete(req.params.id).then((result) => {
        if (result) {
            res.status(200).send(`badge id: ${req.params.id} successfully deleted`)
        } else {
            res.status(404).send('badge not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.getAllBadges = getAllBadges;
exports.getOneBadge = getOneBadge;
exports.createBadge = createBadge;
exports.deleteBadge = deleteBadge;