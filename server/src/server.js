/** dotenv config setup for loading secret environment variables */
import "../config/loadEnv";

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { DateTime } from "luxon";
/** Express Server security */
import helmet from "helmet";
import hpp from "hpp";
import csrf from "csurf";
import cors from "cors";
import rateLimit from "express-rate-limit";

/** Auth0, Passport, Sessions and Cookies */
import cookieSession from "cookie-session";
import expressSession from "express-session";
import passport from "passport";
import { setupPassportStrategy } from "./auth/passport";

import articleRouter from "./api/article.routes";
import commentRouter from "./api/comment.routes";
import authRouter from "./api/auth.routes";

const PORT = process.env.PORT || 9000;

/** Set up the Express.js app */
const app = express();

/** Helmet helps to secure Express server by setting various HTTP headers. */
app.use(helmet());

/** Use hpp as middleware to protect against HTTP Parameter Pollution attacks */
app.use(hpp());

/** Set up Cookie Session Middleware */
// app.use(
//     cookieSession({
//         name: "session",
//         keys: [process.env.COOKIE_SESSION_KEY],
//         expires: DateTime.local().plus({ hours: 24 }),
//         /** Set secure: true for production */
//         secure: false,
//     }),
// );

/** Protect against Cross-Site Request Forgery (CSRF) */
// app.use(csrf({ cookie: true }));

/** Enable CORS from client origins */
app.use(cors({
    origin: process.env.CLIENT_ORIGIN_URL,
}));

/** Set up the Express Rate Limiter for the API */
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000,
});

/** Apply the Express Rate Limiter to the /api endpoint. */
app.use("/api", apiLimiter);

/** Express session configuration object */
const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false, /** Must be false for Auth0 Passport.js strategy */
    saveUninitialized: true,
};

if (app.get("env") === "production") {
    /** Ensure Cookies are sent securely via HTTPS only */
    session.cookie.secure = true;

    /** Uncomment below if the server is behind a proxy (like on Heroku) */
    // app.set('trust proxy', 1);
}

/** Use Express Session middleware with session config */
app.use(expressSession(session));

/** Set up passport strategy */
setupPassportStrategy(passport);

/** Initialize Passport and modify persistent login session */
app.use(passport.initialize());
app.use(passport.session());

/** Serialize and deserialize user instances to and from the session */
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

/** Serve static files on Express server using middleware */
app.use(express.static(path.join(__dirname, "/dist")));

/**
 * Parse JSON objects included in requests.
 * - Adds body property to the req parameter to the matching route.
 */
app.use(bodyParser.json());

// Creating custom middleware with Express
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

/** Use API router as middleware with endpoint "/api" */
app.use("/api", articleRouter);
app.use("/api", commentRouter);

/** Use the authentication router as middleware with endpoint "/auth" */
app.use("/auth", authRouter);

/**
 * All requests which are not caught by the other API routes should be
 * passed onto the app.
 * - Allows the client side app to navigate between pages and process
 * URLs correctly.
 */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

/** Bind Express app and listen for connections */
const server = app.listen(PORT, () => {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    \nServer listening on PORT ${PORT}.\
    \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
});

/* Close the server before Node.js exits */
process.on("exit", () => {
    server.close();
});
