const express = require('express')
const router = express.Router()

//Home page
router.get('/', function (req, res) {res.render('pages/index')})

//About page
router.get('/about', function (req, res) {res.render('pages/about')})

//Add More Page Routes 


module.exports = router