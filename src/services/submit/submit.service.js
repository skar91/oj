// Initializes the `submit` service on path `/submit`
const createService = require('./submit.class.js');
const hooks = require('./submit.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/submit', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('submit');

  service.hooks(hooks);
};
