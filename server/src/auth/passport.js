import Auth0Strategy from "passport-auth0";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const auth0Strategy = new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL,
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
        /**
         * Access tokens are used to authorize users to an API.
         * - accessToken is the token to call the Auth0 API
         * or a secured third-party API
         * - extraParams.id_token has the JSON Web Token
         * - profile has all the information from the user
         */
        return done(null, profile);
    },
);

const jwtStrategy = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET_KEY,
    },
    (payload, done) => {
        // TODO: add additional jwt token verification
        return done(null, payload);
    },
);

export const setupPassportStrategy = (passport) => {
    passport.use(auth0Strategy);
    // passport.use(jwtStrategy);
};
