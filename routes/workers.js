const express = require('express')
const router = express.Router();
const controller = require('../controllers/workers')
const {validationResult, body} = require('express-validator')

router.get('/', ( req, res) => {
    controller.getAllWorkers(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneWorker(req,res);
})

router.post('/login', (req, res) => {
    controller.login(req, res);
})

router.post('/:id/badges/:id', (req, res) => {
    controller.giveBadge(req, res)
})

/* que infromações são necessarias*/
router.put('/:id', (req, res) => {
    controller.updateWorker(req, res)
})

router.patch('/:id', (req, res) => {
    controller.recoverPassword(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteWorker(req, res)
})

module.exports = router