const express = require('express');
const app = express();
const route = require('./routes/route');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',route);

app.set('port',process.env.PORT || 8000);

module.exports = app;