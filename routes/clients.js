const express = require('express')
const router = express.Router();
const controller = require('../controllers/badges')
const {validationResult, body} = require('express-validator')

router.post('/:name', (req, res) => {
    controller.createClient(req, res);
})

router.get('/', ( req, res) => {
    controller.getAllClients(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneClient(req,res);
})

/* que infromações são necessarias*/
router.put('/:name', (req, res) => {
    controller.updateClient(req, res)
})

router.delete('/:name', (req, res) => {
    controller.deleteClient(req, res)
})

module.exports = router