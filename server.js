const express = require('express')
const nunjucks = require('nunjucks')
const compression = require('compression')

const app = express()
const port = process.argv[2] || 3000

/* ###### TEMPLATE CONFIG ###### */
// configure nunjucks template engine
// http://mozilla.github.io/nunjucks
nunjucks.configure('templates', {
	autoescape: true,
	express: app,
	watch: true
})

/* ###### MIDDLEWARE ###### */
// static files middleware
app.use(express.static('dist'))
// gzip compression on everything
app.use(compression())

/* ###### ROUTING ###### */
// Home
app.get( '/', function(req, res) {
	res.render('pages/index.njk')
})

// 404 catchall
app.get( '*', function(req, res) {
	res.status(404).render('pages/404.html')
})

/* ###### SERVER START ###### */
// start server and listen on port
app.listen(port, () => console.log(`App running on port ${port}!`))
