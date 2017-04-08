const passport = require('passport');
const url = require('url');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config');
const users = require('../../app/controllers/userServerControllers');

module.exports = () => {
  passport.authenticate('facebook');
  passport.authenticate('facebook', {scope: 'email'});
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL,
      profileFields: ['id', 'name', 'displayName', 'emails'],
      passReqCallback: true
  }, (req, accessToken, refreshToken, profile, done) => {
      const providerData = profile._json;
      providerData.accessToken = accessToken;
      providerData.refreshToken = refreshToken;

      const providerUserProfile = {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          fullName: profile.displayName,
          userName: profile.name.givenName + profile.name.familyName,
          provider: 'facebook',
          providerId: profile.id,
          providerData: providerData
      };

      users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};