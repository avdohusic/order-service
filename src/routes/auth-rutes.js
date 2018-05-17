const router = require('express').Router(),
    passport = require('passport');


router.get('/login', (req, res) => {
    res.render('pages/login', {headerTitle: 'softhouse'});
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/');
});

module.exports = router;