let authRoutes = require('./auth-rutes');
let profileRoute = require('./profile');
module.exports = function (app) {

    //auth routes
    app.use('/auth', authRoutes);

    //profile routes
    app.use('/profile', profileRoute);

    //public route
    app.get('/', function (req, res) {
        res.render('pages/index', {headerTitle: 'softhouse', user: req.user});
    });

    app.get('/login', function (req, res) {
        res.render('pages/login', {headerTitle: 'softhouse', user: req.user});
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.use(function (req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });

};