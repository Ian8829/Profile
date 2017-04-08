module.exports = {
    db: 'mongodb://heroku_sn9881qp:anakh9g15vv3ppdacqses4pni1@ds155130.mlab.com:55130/heroku_sn9881qp',
    sessionSecret: 'productionSessionSecret',
    facebook: {
        clientID: '1363024937074681',
        clientSecret: 'e021da419b5018ab843a1a686a4b29a1',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/facebook/callback'
    },
    google: {
        clientID: '214629447921-3l7il1kbbsbcu76h4pnkn5dtqoga2g24.apps.googleusercontent.com',
        clientSecret: '_7s_ri1i4l_8xdRjU1iDb_cs',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/google/callback'
    },
    twitter: {
        clientID: '6D5CBaHTrxNup6IicRpWJJAJB',
        clientSecret: 'Z0pS1DHXVFT8NMPVp6faCoqGiIV8Je4tVFUmFBqRVyo0zrEjc8',
        callbackURL: 'https://ianprofile.herokuapp.com/oauth/twitter/callback'
    }
};