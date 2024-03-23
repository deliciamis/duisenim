
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function run() {
  try {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('mycollection');

    const docs = await collection.find({}).toArray();
    console.log(docs);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

