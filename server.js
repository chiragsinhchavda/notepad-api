const express = require('express');
require('./config/mongodb.connect')

const app = express();
const hostname = "127.0.0.1";
const port = 3000

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));