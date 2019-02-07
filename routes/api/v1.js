const 
	express = require('express'),
	router 	= express.Router()

// const secured = require('../middleware/secured')

// API Index
router.get('/', function(req, res, next) {
	res.send('Welcome to v1 of our API')
})

router.get('*', function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

// export the router
module.exports = router