require('./config/mongodb.connect')
const express = require('express');
const local_env = require('./config/default')
const notepadRoutes = require('./server/route/notepad.route')
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*'
}));

app.use('/api',notepadRoutes)


app.listen(local_env.port, local_env.hostname, () => console.log(`Server running at http://${local_env.hostname}:${local_env.port}`));