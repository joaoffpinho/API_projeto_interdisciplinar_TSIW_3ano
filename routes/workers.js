const express = require('express')
const router = express.Router();
const controller = require('../controllers/workers')
const {validationResult, body} = require('express-validator')

router.post('/login', (req, res) => {
    controller.login(req, res);
})//done

//testing
router.post('/register', (req, res) => {
    controller.register(req, res);
})//done

router.get('/getAll', ( req, res) => {
    controller.getAllWorkers(req,res);
})//done

router.get('/:id', ( req, res) => {
    controller.getOneWorker(req,res);
})//done

router.put('/:id/update', (req, res) => {
    controller.updateWorker(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteWorker(req, res)
})

router.put('/:id/addbadge', (req, res) => {
    controller.addBadge(req, res)
})

router.put('/:id/removebadge', (req, res) => {
    controller.removeBadge(req, res)
})

// router.post('/:id/badges/:id', (req, res) => {
//     controller.giveBadge(req, res)
// })

// router.patch('/:id', (req, res) => {
//     controller.recoverPassword(req, res)
// })






module.exports = router