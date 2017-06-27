"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
//require("reflect-metadata");
//require('./config/database');
let app = require('./dist/config/express');
var server = http.createServer(app);
var port = process.env.PORT || 1337;
server.listen(port);