const path = require("path");
const express = require("express");
const cors = require("cors");

const router = require("./router");
const { urlencoded } = require("express");

const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(process.env.CORS_DOMAIN ?? "*"));

app.use(router);

module.exports = app;