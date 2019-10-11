const getModel = require('../getModel');

const find = async (model, query = {}, sort = {}, pagination) => {
  let collection = await getModel(model);
  console.log(`find query for model ${model}---- ${JSON.stringify(query)}`);
  let res;
  try {
    res = await collection
      .find(query)
      .collation({ locale: "en" })
      .sort(sort)
      .toArray();

  } catch (err) {
    console.log(err);
    return;
  }
  console.log('response----', JSON.stringify(res));
  return res;
}

module.exports = {
  find
}