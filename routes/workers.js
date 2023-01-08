const express = require('express')
const router = express.Router();
const controller = require('../controllers/workers')
const {validationResult, body} = require('express-validator')

router.post('/login', (req, res) => {
    controller.login(req, res);
})

router.get('/all', ( req, res) => {
    controller.getAllWorkers(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneWorker(req,res);
})

router.put('/:id/update', (req, res) => {
    controller.updateWorker(req, res)
})

// router.post('/:id/badges/:id', (req, res) => {
//     controller.giveBadge(req, res)
// })

// router.patch('/:id', (req, res) => {
//     controller.recoverPassword(req, res)
// })

router.delete('/:id', (req, res) => {
    controller.deleteWorker(req, res)
})


//testing
router.post('/register', (req, res) => {
    controller.register(req, res);
})

module.exports = router