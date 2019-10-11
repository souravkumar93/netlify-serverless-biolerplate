const mongoClient = require('../mongoclient');

module.exports = async (model, list = []) => {
  const [err, db] = await mongoClient();
  if (!db) {
    console.log(err);
    return;
  }
  let collection = db.collection(model);
  try {
    const res = await collection.insertMany(list);
    return res;
  } catch (err) {
    console.log(err);
    return;
  }
}