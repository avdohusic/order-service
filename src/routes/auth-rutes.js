const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.get('/logout', (req, res) => {
    res.send("Logging out");
});

router.get('/google', (req, res) => {
    //handle with passport
    res.send("Loggin with google");
});

module.exports = router;