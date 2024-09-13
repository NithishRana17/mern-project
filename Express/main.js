var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());

var { MongoClient, ObjectId } = require("mongodb");

const DATABASE_NAME = "office";
const MONGODB_URL =
  "mongodb+srv://NithishRaghavendra:YjrGj2M82uToT30B@cluster0.ijgmu.mongodb.net/";
const client = new MongoClient(MONGODB_URL);

// app.post("/createTeacher", async (req, res) => {
//   let { name, email, password, address, mobile_no } = req.body;
//   let data = {
//     name: name,
//     email: email,
//     password: password,
//     address: address,
//     mobile_no: mobile_no,
//   };
//   await client.connect();
//   let db = client.db(DATABASE_NAME);
//   await db.collection("teachers").insertOne(data);
//   res.status(200).json({ message: "Created New Teacher Record!!" });
// });
app.post("/createTeacher", async (req, res) => {
  let { id, name, email, password, address, mobile_no } = req.body;

  // Basic validation to check for missing fields
  if (!id || !name || !email || !password || !address || !mobile_no) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create the teacher data object
  let data = {
    _id: id,
    name: name,
    email: email,
    password: password,
    address: address,
    mobile_no: mobile_no,
  };

  try {
    await client.connect();
    let db = client.db(DATABASE_NAME);

    // Insert the teacher data into the 'teachers' collection
    await db.collection("teachers").insertOne(data);

    // Respond with success message
    res.status(200).json({ message: "Created New Teacher Record!" });
  } catch (error) {
    // Error handling
    res.status(500).json({ message: "Error creating teacher record", error });
  } finally {
    // Close the database connection
    await client.close();
  }
});

app.get("/listTeacher", async (req, res) => {
  await client.connect();
  let db = client.db(DATABASE_NAME);
  const data = await db.collection("teachers").find({}).toArray();
  res.status(200).json(data);
});

app.get("/listteacherbyname/:name", async (req, res) => {
  await client.connect();
  let { name } = req.params;
  let db = client.db(DATABASE_NAME);
  let list = await db.collection("teachers").find({ name: name }).toArray();
  res.status(200).json(list);
});

app.post("/login", async (req, res) => {
  await client.connect();
  let { name, password } = req.body;
  let db = client.db(DATABASE_NAME);
  const teachers = await db
    .collection("teachers")
    .find({ name: name, password: password })
    .toArray();
  // const teacher = teachers[0];
  // if (teacher.password === password) {
  //   res.status(200).json({ message: "Login Successful" });
  // } else {
  //   res.status(401).json({ error: "Password incorrect" });
  // }

  if (teachers.length > 0) {
    res.json({ message: "Login Successful" });
  } else {
    res.status(401).json({ error: "Invalid User id or Password" });
  }
});
app.get("/web", (req, res) => {
  res.json({ msg: "Hello" });
});
app.post("/web", (req, res) => {
  res.json({ msg: "Hello Post" });
});
app.delete("deleteUserByName", async (req, res) => {
  await client.connect();
  let { name } = req.body;
  let db = client.db(DATABASE_NAME);
  await db.collection("employees").deleteOne({ name: name });
  res.status(200).json({ message: "User deleted successfully" });
});
app.put("/updatePassword", async (req, res) => {
  await client.connect();
  let { name, password } = req.query;
  let db = client.db("office");
  await db
    .collection("teachers")
    .updateOne({ name: name }, { $set: { password: password } });
  res.status(200).json({ message: "Password updated successfully" });
});
app.post("/updatePassword", async (req, res) => {
  await client.connect();
  let { name, password } = req.body;
  let db = client.db("office");
  await db
    .collection("teachers")
    .updateOne({ name: name }, { $set: { password: password } });
  res.status(200).json({ message: "Password updated successfully" });
});
app.get("/getById", async (req, res) => {
  await client.connect();
  let { id } = req.query;
  let db = client.db("office");
  let teacher = await db
    .collection("teachers")
    .find({ _id: new ObjectId(id) })
    .toArray();
  res.json(teacher);
});
app.listen(8080);
