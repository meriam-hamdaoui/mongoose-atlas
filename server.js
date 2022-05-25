require("dotenv").config();
const express = require("express");
const connectAtlas = require("./config/connectAtlas.js");
const listener = require("./controllers/listener.js");
const atlasRouter = require("./routes/personAtlas");

const app = express();

connectAtlas();

app.use(express.json());
app.use("/api/personList", atlasRouter);

const port = process.env.PORT || 4100;
app.listen(port, (err) => listener(err, port));
