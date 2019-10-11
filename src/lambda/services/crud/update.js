const mongoClient = require('../mongoclient');

module.exports = async (model, document, query = {}, upsert = true) => {
  const [err, db] = await mongoClient();
  if (!db) {
    console.log(err);
    return;
  }
  let collection = db.collection(model);
  try {
    const res = await collection.updateOne(query, {
      $set: {
        ...document
      }
    }, { upsert });
    return res;
  } catch (err) {
    console.log(err);
    return;
  }
}