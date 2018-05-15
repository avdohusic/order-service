const config = require('../config/config');
const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const app = express();

app.engine('ejs', engine);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/pages')]);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

let routes = require('./routes/routes');
routes(app);

app.listen(config.server.port, function () {
    console.log("APP started on port %d", config.server.port);
});