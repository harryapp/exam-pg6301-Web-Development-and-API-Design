import express from "express";
import * as path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import MessagesRouter from "./message/messagesRouter.js";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors"
import AuthRoute from "./auth/authRoute.js";
import passportSetup from "./auth/passport.js";
import UserRoute from "./user/userRoute.js";
import {WebSocketServer} from "ws";
import {config} from "./config/constants.js";


dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

await mongoose.connect(process.env.MONGODB_URL)
    .then( () => console.log("Connected to MongoDB database: " + mongoose.connection.name))
    .catch((err) => console.log(err));



app.use(
    cookieSession({ name: "session", keys: [process.env.COOKIE_SECRET], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: config.url.BASE_URL,
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/api/message", MessagesRouter)
app.use("/auth", AuthRoute)
app.use("/api/users", UserRoute)

app.use(express.static("../client/dist/"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const wsServer = new WebSocketServer({ noServer: true });

const sockets = [];

wsServer.on("connect", (socket) => {
    sockets.push(socket);
    socket.on("message", (data) => {
        const { sentBy, message, dateCreated } = JSON.parse(data);
        for (const recipient of sockets) {
            recipient.send(JSON.stringify({ sentBy, message, dateCreated }));
        }
    });
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Started on http://localhost:" + server.address().port);
    server.on("upgrade", (req, socket, head) => {
        wsServer.handleUpgrade(req, socket, head, (socket) => {
            wsServer.emit("connect", socket, req);
        });
    });
});


