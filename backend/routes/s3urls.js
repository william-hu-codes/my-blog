const express = require('express')
const router = express.Router()
const s3urlsCtrl = require("../controllers/s3urls")
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/s3urls', ensureLoggedIn, s3urlsCtrl.get)

module.exports = router