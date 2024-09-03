var express = require("express");
var app = express();
app.use(express.json());
app.get("/web", (req, res) => {
  res.json({ msg: "Hello" });
});
app.post("/web", (req, res) => {
  res.json({ msg: "Hello Post" });
});
app.post("/login", (req, res) => {
  // let email = req["query"]["email"];
  // let password = req["query"]["password"];
  // let { email, password } = req["query"];
  // if (email === "nithishrana17@gmail.com" && password === "12345") {
  //   res.json({ msg: "Login successful" });
  // } else {
  //   res.json({ msg: "Login failed" });
  // }
  // let { name, email, password, address } = req.body;
  // if (!name || !email || !password || !address) {
  //   res.json({ msg: "Registration  failed" });
  // } else {
  //   res.json({ msg: "Registration successful" });
  // }
  let { a, b } = req.body;
  if (!a || !b) {
    res.json({ msg: "Invalid Input" });
  } else {
    res.json({ add: a + b });
  }
});
app.listen(8080);
