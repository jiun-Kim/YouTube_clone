import express from "express";
import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/data", express.static("src/data"));
app.use("/static", express.static("src/static"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(routes.home, globalRouter);

export default app;
