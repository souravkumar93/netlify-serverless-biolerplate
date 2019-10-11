const ObjectID = require('mongodb').ObjectID;

export const getObjectId = (stringId) => new ObjectID(stringId);
