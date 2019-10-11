const { findOne } = require('./crud/find');
const update = require('./crud/update');
const create = require('./crud/create');
const { getObjectId } = require('../utils')

const CompanyModel = 'Company';

const getCompany = async () => {
  return await findOne(CompanyModel);
}

const updateCompany = async (company) => {
  const query = {};
  if (company._id) {
    query._id = getObjectId(company._id);
  }
  delete company._id;
  return await update(CompanyModel, company, query);
}

const createCompany = async (company) => {
  return await create(CompanyModel, [company]);
}

module.exports = {
  updateCompany,
  getCompany,
  createCompany
}