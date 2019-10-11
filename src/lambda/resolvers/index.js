const uuidv1 = require('uuid/v1')

module.exports = {
  Query: {
    getStatus: async () => {
      return { status: 'ok' }
    }
  },


  Mutation: {

    login: async (_root, args, ctx) => {
      const { email, password } = args;
      const res = {};
      if (email === 'dummy' && password === 'dummy') {
        res.token = uuidv1();
        res.status = 'success';
      } else {
        res.status = 'error';
        res.message = 'Account Invalid';
      }
      return res;
    }

  }
};