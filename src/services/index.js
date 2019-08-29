const problems = require('./problems/problems.service.js');
const compile = require('./compile/compile.service.js');
const execute = require('./execute/execute.service.js');
const submit = require('./submit/submit.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(problems);
  app.configure(compile);
  app.configure(execute);
  app.configure(submit);
};
