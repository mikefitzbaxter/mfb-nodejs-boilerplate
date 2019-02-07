const 
	express = require('express'),
	router 	= express.Router(),
	v1ApiController = require('./v1')

// const secured = require('../middleware/secured')

router.use('/v1', v1ApiController)

// API Index
router.get('/', function(req, res, next) {
	res.send('Welcome to our API')
})

router.get('*', function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})


/* ###### API ERROR HANDLERS ###### */
router.use(function(err, req, res, next) {
	// Set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	console.log(err)
	res.status(err.status || 500).json({message: err.mesage, error: err})
});



// export the router
module.exports = router