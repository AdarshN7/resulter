const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const hostname = 'localhost';
const port = 3000;

const connectDB = require('./server/database/connection');
const routes = require('./server/routes/router')
// log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//set view engine
app.use(express.static("public"));
app.set("view engine", "ejs");

// load route
app.use('/', routes)

// server listening
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
