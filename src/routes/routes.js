let authRoutes = require('./auth-rutes');

module.exports = function (app) {

    app.use('/auth', authRoutes);

    app.get('/', function (req, res) {
        res.render('pages/index', {what: 'best', headerTitle: 'softhouse'});
    });

    app.get('/about', function (req, res) {
        res.render('pages/about');
    });

    app.use(function (req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });

};