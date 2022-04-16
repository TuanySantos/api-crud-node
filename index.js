require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.STR_CONN;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("agenda").collection("pessoas");
  const documents = await collection.find().toArray();
  console.log(documents);
  // perform actions on the collection object
  client.close();
});
