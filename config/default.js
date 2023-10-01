module.exports = {
	port: '3000',
	local_uri: `http://localhost:${port}/`
}

module.exports = {
	appName: 'notepad-app-api',
  
	port: 3000,
  
	debug: {
	  request: ['error', 'info'],
	  log: ['info', 'error', 'warning']
	},
  
	constants: {
	  DEFAULT_COUNTRY: 'US',
	  DEFAULT_TIMEZONE: 'America/New_York',
	  EXPIRATION_PERIOD: '730h',
	  JWT_SECRET: 'jwtsecret'
	},
  
	connections: {
	  db: process.env.MONGODB_URI
	}
  }