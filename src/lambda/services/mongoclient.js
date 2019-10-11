const MongoClient = require('mongodb').MongoClient;

const dbName = 'netlifyfunctions';
const url = `mongodb://localhost:27017/${dbName}`;

let db;

module.exports = async () => {
  if (db) {
    return [null, db];
  }
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    const dbInstance = client.db(dbName);
    console.log('connected to db', dbName);
    db = dbInstance;
    return [null, db];
  } catch (err) {
    console.log('failed to connect to db', err);
    return [err, null];
  }
};