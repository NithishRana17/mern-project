var express = require("express");
var app = express();
app.use(express.json());

const { MongoClient, ObjectId } = require("mongodb");
var cors = require("cors");
app.use(cors());

const url =
  "mongodb+srv://NithishRaghavendra:YjrGj2M82uToT30B@cluster0.ijgmu.mongodb.net/";
const client = new MongoClient(url);

const dbName = "jobportal";

app.post("/create_jobs", async (req, res) => {
  let body = req.body;
  let data = {
    name: body["name"],
    company_name: body["company_name"],
    requirements: body["requirements"],
  };
  await client.connect();
  let db = client.db("office");

  await db.collection("jobportal").insertOne(data);
  res.json({ msg: "Successfully created a job" });
});

app.get("/list_jobs", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  let data = await db.collection("jobportal").find({}).toArray();
  res.json(data);
});

// app.put("/update_job", async (req, res) => {
//   let { name, requirements } = req.body;
//   await client.connect();
//   let db = client.db("office");
//   await db
//     .collection("jobportal")
//     .updateOne({ name: name }, { $set: { requirements: requirements } });

//   res.json({ msg: "Updated the requirements" });
// });

app.put("/update_job", async (req, res) => {
  let { id, name, company, requirements } = req.body;
  await client.connect();
  let db = client.db("office");
  await db.collection("jobportal").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: { requirements: requirements, name: name, company_name: company },
    }
  );

  res.json({ msg: "Updated the requirements" });
});

app.delete("/delete_job", async (req, res) => {
  let { id } = req.query;
  await client.connect();
  let db = client.db("office");
  await db.collection("jobportal").deleteOne({ _id: new ObjectId(id) });

  res.json({ msg: "Deleted the Job" });
});

app.listen(8080);
