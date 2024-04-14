const express = require("express");
const cors = require("cors")
require('dotenv').config()
const app = express();

app.listen(process.env.PORT);

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const testRouter = require("./routes/test");
app.use("/test", testRouter);