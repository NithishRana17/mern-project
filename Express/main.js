var express = require("express");
var app = express();
app.get("/web", (req, res) => {
  res.json({ msg: "Hello" });
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
