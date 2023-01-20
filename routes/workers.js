const express = require('express')
const router = express.Router();
const controller = require('../controllers/workers')
const {validationResult, body} = require('express-validator')

router.post('/login', (req, res) => {
    controller.login(req, res);
})

router.post('/register', (req, res) => {
    controller.register(req, res);
})

router.get('/getAll', ( req, res) => {
    controller.getAllWorkers(req,res);
})

router.get('/getSome', ( req, res) => {
    controller.getSomeWorkers(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneWorker(req,res);
})

router.get('/:id/badges', ( req, res) => {
    controller.getSomeBadges(req,res);
})

router.put('/:id/update', (req, res) => {
    controller.updateWorker(req, res)
})

router.put('/:id/addbadge', (req, res) => {
    controller.addBadge(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteWorker(req, res)
})

router.delete('/:id/removebadge', (req, res) => {
    controller.removeBadge(req, res)
})

module.exports = router