const express = require('express');

require('dotenv').config();

const home = require('./src/routes/home/home.js');
const map = require('./src/routes/map/map.js');
const search = require('./src/routes/search/search.js');
const carwash = require('./src/routes/carwash/carwash.js');
const repair = require('./src/routes/repair/repair.js');

const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/src/public`));
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/map', map);
app.use('/search', search);
app.use('/carwash', carwash);
app.use('/repair', repair);

module.exports = app;