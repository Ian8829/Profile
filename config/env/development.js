module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '271750093284631',
        clientSecret: 'febc76d2d9e9ce1babb2d189f051bef1',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    google: {
        clientID: '377709193680-tolom7bda734akkhancqj495ugqh0d9s.apps.googleusercontent.com',
        clientSecret: 'qSWSQGmkadQBE5gTJfhjED5o',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    },
    twitter: {
        clientID: '6D5CBaHTrxNup6IicRpWJJAJB',
        clientSecret: 'Z0pS1DHXVFT8NMPVp6faCoqGiIV8Je4tVFUmFBqRVyo0zrEjc8',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    }
};