require('./config/mongodb.connect')
const express = require('express');
const LOCAL = require('./config/default')
const rootRoutes = require('./server/route/root.route')
const notepadRoutes = require('./server/route/notepad.route')
const authRoutes = require('./server/route/auth.route')
const cors = require('cors');

const app = express();
app.use(express.json(), cors({ origin: '*' }));

app.use('', rootRoutes)
app.use('/api', notepadRoutes)
app.use('/auth', authRoutes)

app.listen(LOCAL.PORT, LOCAL.HOST_NAME, (error) => {
	if (error) {
		console.log(`Error occurred, server can't start : `, error)
	} else {
		console.log(`Server running at ${LOCAL.constants.BASE_URI}`)
	}
});