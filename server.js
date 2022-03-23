const http = require('http');
const port = 3000;
const application = require('./app');


const server = http.createServer(application);
server.listen(port);
