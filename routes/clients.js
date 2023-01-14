const express = require('express')
const router = express.Router();
const controller = require('../controllers/clients')
const {validationResult, body} = require('express-validator')

router.post('/', (req, res) => {
    controller.createClient(req, res);
})

router.get('/', ( req, res) => {
    controller.getAllClients(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneClient(req,res);
})

router.put('/:id', (req, res) => {
    controller.updateClient(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteClient(req, res)
})

module.exports = router