const express = require('express')
const router = express.Router();
const controller = require('../controllers/teams')
const {validationResult, body} = require('express-validator')

router.get('/all', ( req, res) => {
    controller.getAllTeams(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneTeam(req,res);
})

router.post('/create', (req, res) => {
    controller.createTeam(req, res);
})

/* que infromações são necessarias*/
router.put('/:title', (req, res) => {
    controller.updateTeam(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteTeam(req, res)
})

module.exports = router