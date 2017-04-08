const passport = require('passport');
const url = require('url');
const TwitterStrategy = require('passport-twitter');
const config = require('../config');
const users = require('../../app/controllers/userServerControllers');

module.exports = function () {
    passport.use(new TwitterStrategy({
        consumerKey: config.twitter.clientID,
        consumerSecret: config.twitter.clientSecret,
        callbackURL: config.twitter.callbackURL,
        passReqToCallback: true
    }, (req, token, tokenSecret, profile, done) => {
        const providerData = profile._json;
        providerData.token = token;
        providerData.tokenSecret = tokenSecret;

        const providerUserProfile = {
            fullName: profile.displayName,
            username: profile.username,
            provider: 'twitter',
            providerId: profile.id,
            providerData
        };

        users.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};