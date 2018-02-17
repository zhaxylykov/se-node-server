// keys.js 
if (process.env.NODE_ENV === 'production'){
	// prod
	module.exports = require('./prod');
} else {
	// dev key
	module.exports = require('./dev');
}