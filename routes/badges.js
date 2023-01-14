const express = require('express')
const router = express.Router();
const controller = require('../controllers/badges')
const {validationResult, body} = require('express-validator')

router.get('/', ( req, res) => {
    controller.getAllBadges(req,res);
})

router.post('/', (req, res) => {
    controller.createBadge(req, res);
})

router.get('/:id', ( req, res) => {
    controller.getOneBadge(req,res);
})

router.delete('/:id', (req, res) => {
    controller.deleteBadge(req, res)
})

module.exports = router