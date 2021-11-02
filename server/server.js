const express = require('express');
const app = express();
const apiRouter = require("./routes");


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use(express.static("client"));

app.listen(3000);