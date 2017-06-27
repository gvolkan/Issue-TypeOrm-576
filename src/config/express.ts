import * as express from 'express';
import * as consign from 'consign';
import * as bodyParser from 'body-parser';
var cors = require('cors');
import "reflect-metadata";
let app = express();
let expressValidator = require('express-validator')
app.use(cors());

app.use(expressValidator());
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));



consign({ cwd: 'dist' })
  .then('routes')
  .into(app);

module.exports = app;