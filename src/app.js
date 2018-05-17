const config = require('./config/config'),
    express = require('express'),
    path = require('path'),
    engine = require('ejs-mate'),
    passportSetup = require('./auth/passport-setup'),
    mongoose = require('mongoose'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

//Set connection to Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.host + ':' + config.mongodb.port + "/" + config.mongodb.project);

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