// This file is main entry for Spendesk App
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config/config');
const controllers = require('./controllers');

const app = express();

// Set Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// basic liveness check - useful for kube
app.use('/healthcheck', require('express-healthcheck')());

// Set controllers
controllers.set(app);

// Handle assets and 404.
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send('404', 404);
});


// Listen
const server = http.createServer(app);
server.listen(config.port, () => {
  console.log(`> Ready on ${config.port}!`);
});
