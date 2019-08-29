// Initializes the `compile` service on path `/compile`
const createService = require('./compile.class.js');
const hooks = require('./compile.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/compile', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('compile');

  service.hooks(hooks);
};
