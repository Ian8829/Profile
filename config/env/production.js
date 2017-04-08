module.exports = {
    db: 'mongodb://heroku_sn9881qp:anakh9g15vv3ppdacqses4pni1@ds155130.mlab.com:55130/heroku_sn9881qp',
    sessionSecret: 'productionSessionSecret',
    facebook: {
        clientID: '1363024937074681',
        clientSecret: 'e021da419b5018ab843a1a686a4b29a1',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/facebook/callback'
    },
    google: {
        clientID: '377709193680-tolom7bda734akkhancqj495ugqh0d9s.apps.googleusercontent.com',
        clientSecret: 'qSWSQGmkadQBE5gTJfhjED5o',
        callbackURL: 'https://ianprofile.herokuapp.comoauth/google/callback'
    },
    twitter: {
        clientID: '6D5CBaHTrxNup6IicRpWJJAJB',
        clientSecret: 'Z0pS1DHXVFT8NMPVp6faCoqGiIV8Je4tVFUmFBqRVyo0zrEjc8',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/twitter/callback'
    }
};