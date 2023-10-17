const express = require('express')
const router = express.Router()
const s3urlsCtrl = require("../controllers/s3urls")
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/s3urls', s3urlsCtrl.get)
