const express = require("express");
require("./db/conn.js");
const studentRouter = require("./routers/student.js");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter); // register studentRouter

app.listen(port,() => {
  console.log(`listening on http://localhost:${port}`);
});

