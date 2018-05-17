const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20'),
    config = require('./../config/config'),
    User = require('./../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: config.googleApi.clientID,
        clientSecret: config.googleApi.clientSecret
    }, (accesToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then((regUser) => {
            if (!regUser) {
                new User({
                    googleId: profile.id,
                    name: profile.displayName
                }).save().then((dbUser) => {
                    done(null, dbUser);
                });
            } else {
                done(null, regUser);
            }
        });
    })
);