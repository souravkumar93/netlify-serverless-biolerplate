const { find } = require('./crud/find');

const getUserByEmail = async (email) => {
  return await find('User', {
    email
  });
}

module.exports = {
  getUserByEmail
}