const express = require('express')
const router = express.Router();
const controller = require('../controllers/teams')

router.post('/create', (req, res) => {
    controller.createTeam(req, res);
})

router.get('/all', ( req, res) => {
    controller.getAllTeams(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneTeam(req,res);
})

/* que infromações são necessarias*/
router.put('/:id', (req, res) => {
    controller.updateTeam(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteTeam(req, res)
})

module.exports = router