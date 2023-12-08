module.exports = {
	appName: 'nodepad-api',
  
	PORT: 3000,
	HOST_NAME: '127.0.0.1',
  
	debug: {
	  request: ['error', 'info'],
	  log: ['info', 'error', 'warning']
	},
  
	constants: {
	  DEFAULT_COUNTRY: 'US',
	  DEFAULT_TIMEZONE: 'America/New_York',
	  EXPIRATION_PERIOD: '730h',
	  JWT_SECRET: 'jwtsecret',
	  BASE_URI: 'http://127.0.0.1:3000'
	},
  
	connections: {
	  db: process.env.MONGODB_URI
	}
  }