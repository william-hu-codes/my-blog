// PATH STARTS WITH localhost:4000/posts 

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const postsCtrl = require("../controllers/posts")


///////////////////////////////
// ROUTES
////////////////////////////////

// posts INDEX ROUTE
router.get('/', postsCtrl.index)

///////////////////////////////
// SHOW - DETAIL - GET
////////////////////////////////
router.get('/:id', postsCtrl.show)

///////////////////////////////
// CREATE - POST
////////////////////////////////
router.post('/', postsCtrl.create)

///////////////////////////////
// DESTROY - DELETE 
////////////////////////////////
router.delete('/:id', postsCtrl.delete)

///////////////////////////////
// UPDATE - PUT
////////////////////////////////
router.put('/:id', postsCtrl.update)

// MISSING - NEW (rendering a template for creating a post)
// MISSING - EDIT (rendering a template for editing a speific post)

module.exports = router