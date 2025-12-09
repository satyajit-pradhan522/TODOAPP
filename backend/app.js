const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

require("./connection/connection");
const authRoute = require("./routes/auth");
const listRoute = require("./routes/list");

app.use(express.json());
app.use(
  cors({
    origin:
      "https://todoapp-eq9y-1dhy35emo-satyajit-pradhans-projects.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api/auth", authRoute);

app.use(express.json());
app.use("/api/lists", listRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
