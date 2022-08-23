const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const passport = require('passport');



const GOOGLE_CLIENT_ID = "398475519221-6bjc5anqk4ev5930bpg1bpuj4trb1nqr.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "Iv1.482e29b5a45e0b64";
const GITHUB_CLIENT_SECRET = "bf84d6c2efc6014f8154c4d6695f03b368a193e1";

const FACEBOOK_CLIENT_ID = "311350097723977";
const FACEBOOK_CLIENT_SECRET = "b4bf59206ee02c4150252a5301ed9908";


passport.use(
    new FacebookStrategy(
    {
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null,profile)
    }
));

passport.use(
    new GithubStrategy(
    {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null,profile)
    }
));

passport.use(
    new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null,profile)
    }
));

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.deserializeUser((user, done) =>{
    done(null, user);
});