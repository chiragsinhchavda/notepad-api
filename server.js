require('./config/mongodb.connect')
const express = require('express');
const local_env = require('./config/default')

const app = express();

app.listen(local_env.port, local_env.hostname, () => console.log(`Server running at http://${local_env.hostname}:${local_env.port}/`));