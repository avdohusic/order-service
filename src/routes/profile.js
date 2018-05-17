const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/login');
    } else {
        next();
    }
};

router.get('/', (req, res) => {
    res.render('pages/profile', {headerTitle: 'softhouse', user: req.user});
});

module.exports = router;