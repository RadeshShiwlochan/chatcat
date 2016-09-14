'use strict';

if(process.env.NODE_ENV === 'production') {
	//offer production stage environment variables
	module.export = {
		host: process.env.host || "",
		dbURI: process.env.dbURI
	}
} else {
	//offer dev stage settings and data
	modules.exports = require('./development.json');
}

}