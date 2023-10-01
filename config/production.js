module.exports = {
	appName: 'notepad',
  
	port: 3000,
	hostname: '127.0.0.1',
  
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