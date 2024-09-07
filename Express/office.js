const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://NithishRaghavendra:YjrGj2M82uToT30B@cluster0.ijgmu.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "office";

async function insertData() {
  let empData = {
    name: "John Doe",
    position: "Manager",
    department: "Marketing",
    salary: 80000,
  };
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("employees");
  await collection.insertOne(empData);
  console.log("Inserted document successfully");
}

insertData();
