const express = require('express')
const router = express.Router();
const controller = require('../controllers/badges')
const {validationResult, body} = require('express-validator')

router.get('/', ( req, res) => {
    controller.getAllBadges(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneBadge(req,res);
})

module.exports = router