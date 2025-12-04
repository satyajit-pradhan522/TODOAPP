const express = require("express");
const app = express();
const port = 3000;
require("./connection/connection");
const authRoute = require("./routes/auth");
const listRoute = require("./routes/list");

app.use(express.json());
app.use("/api/auth", authRoute);

app.use(express.json());
app.use("/api/lists", listRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
