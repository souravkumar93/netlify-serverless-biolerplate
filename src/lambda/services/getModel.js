const mongoClient = require('./mongoclient');

module.exports = async (model) => {
  const [err, db] = await mongoClient();
  if (!db) {
    console.log(err);
    return;
  }
  let collection = db.collection(model);
  return collection;
}