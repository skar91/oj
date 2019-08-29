// Initializes the `problems` service on path `/problems`
const createService = require('./problems.class.js');
const hooks = require('./problems.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/problems', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('problems');

  service.hooks(hooks);
};
