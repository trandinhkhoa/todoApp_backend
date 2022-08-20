const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'todoApp';
let db;

async function connectToDB() {
  try {
    // connect is actually optional. Here it is only used as a test connection
    await client.connect();
    // alternatively I can test by ping the "admin" db
    // await client.db("admin").command({ ping: 1 });
    db = client.db(dbName);
    // should not return client.connect(); If done so, catch() will not be executed
    // because you would return a pending promise, reject will be handled by the caller
    // alternative is return (await client.connect());
    // but I do it like this because I also want to connect to dbName
    return new Promise(resolve => resolve(url));
  }
  catch (error) {
    client.close();
    console.log(error);
    return new Promise((resolve,reject) => reject(url));
  }
}

function getDb() {
  return db;
}

module.exports = {
  connectToDB,
  getDb,
}