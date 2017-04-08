module.exports = {
    db: 'mongodb://heroku_sn9881qp:anakh9g15vv3ppdacqses4pni1@ds155130.mlab.com:55130/heroku_sn9881qp',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '271750093284631',
        clientSecret: 'febc76d2d9e9ce1babb2d189f051bef1',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/facebook/callback'
    },
    google: {
        clientID: '377709193680-tolom7bda734akkhancqj495ugqh0d9s.apps.googleusercontent.com',
        clientSecret: 'qSWSQGmkadQBE5gTJfhjED5o',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/google/callback'
    },
    twitter: {
        clientID: '6D5CBaHTrxNup6IicRpWJJAJB',
        clientSecret: 'Z0pS1DHXVFT8NMPVp6faCoqGiIV8Je4tVFUmFBqRVyo0zrEjc8',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/twitter/callback'
    }
};