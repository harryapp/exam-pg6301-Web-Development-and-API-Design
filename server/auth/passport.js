import passport from "passport";
import mongoose from "mongoose";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../user/userModel.js"
import dotenv from "dotenv";
import {OIDCStrategy} from "passport-azure-ad";
import {config} from "../config/constants.js";

dotenv.config()

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);


passport.use("microsoft",
    new OIDCStrategy(
        {
            identityMetadata: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration",
            clientID: process.env.MICROSOFT_CLIENT_ID,
            redirectUrl: config.url.BASE_URL + "/auth/microsoft/callback",
            allowHttpForRedirectUrl: true,
            responseType: "id_token code",
            responseMode: "form_post",
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET

        },
        function(iss, sub, profile, accessToken, refreshToken, done) {
            done(null, profile)
        }

    )
);




export default passport;