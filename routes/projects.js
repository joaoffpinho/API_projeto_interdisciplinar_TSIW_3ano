const express = require('express')
const router = express.Router();
const controller = require('../controllers/projects')
const {validationResult, body} = require('express-validator')

router.get('/', ( req, res) => {
    controller.getAllProjects(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneProject(req,res);
})

router.post('/', (req, res) => {
    controller.createProject(req, res);
})

/* que infromações são necessarias*/
router.put('/:id', (req, res) => {
    controller.updateProject(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteWorker(req, res)
})

module.exports = router