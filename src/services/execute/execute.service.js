// Initializes the `execute` service on path `/execute`
const createService = require('./execute.class.js');
const hooks = require('./execute.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/execute', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('execute');

  service.hooks(hooks);
};
