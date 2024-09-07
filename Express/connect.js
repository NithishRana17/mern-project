const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://NithishRaghavendra:YjrGj2M82uToT30B@cluster0.ijgmu.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const data = await db.collection("movies").find({}).toArray();
  console.log(data);

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
