const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const {User} = require('../Models/models');


const GOOGLE_CLIENT_ID = '43032504953-q93c15h65sesk71qn0jhfbh7dlkhj0ti.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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' ;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://tan-horse-sari.cyclic.app/google/callback",
    scope: ['profile']
  },
  async function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    const result = await User.findOne({googleId : profile.id});
    if(!result){
        User.create({
            googleId: profile.id ,
            username : profile.displayName 
        })
    }
    return cb(null,result)
    
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });  