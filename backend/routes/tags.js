// PATH STARTS WITH localhost:4000/tags 

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const tagsCtrl = require("../controllers/tags")
const ensureLoggedIn = require('../config/ensureLoggedIn')

///////////////////////////////
// ROUTES
////////////////////////////////

// tags INDEX ROUTE
router.get('/', tagsCtrl.index)

///////////////////////////////
// SHOW - DETAIL - GET
////////////////////////////////
router.get('/:id', tagsCtrl.show)

///////////////////////////////
// CREATE - POST
////////////////////////////////
router.post('/', tagsCtrl.create)

///////////////////////////////
// DESTROY - DELETE 
////////////////////////////////
router.delete('/:id', tagsCtrl.delete)

///////////////////////////////
// UPDATE - PUT
////////////////////////////////
router.put('/:id', tagsCtrl.update)

// MISSING - NEW (rendering a template for creating a post)
// MISSING - EDIT (rendering a template for editing a speific post)

module.exports = router