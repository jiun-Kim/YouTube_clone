import express from "express";
import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import path from "path";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middleware";
import routes from "./routes";

import "./passport";
import apiRouter from "./routers/apiRouter";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/static", express.static("src/static"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.video, videoRouter);
app.use(routes.user, userRouter);

app.use(routes.api, apiRouter);

export default app;
