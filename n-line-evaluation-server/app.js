const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");

require('dotenv').config()
const app = express();

app.listen(process.env.PORT);

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())

const userRouter = require("./routes/users");
const gameRouter = require("./routes/games");

app.use("/users", userRouter);
app.use("/games", gameRouter);