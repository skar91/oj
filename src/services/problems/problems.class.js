const fs = require('fs');
const path = require('path');

/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    let problemlist = this.app.get("problems");
    let res = [];

    for (const problem of problemlist) {

      let problem_path = path.join(__dirname,"../..","problems",problem,"problem.txt");
      let code_path = path.join(__dirname,"../..","problems",problem,"code.txt");

      let p = fs.readFileSync(problem_path,'utf8');
      let c = fs.readFileSync(code_path,'utf8');

      res.push({name: problem, problem: p, code: c});
    }
    return res;
  }

  async get(id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }

  setup(app) {
    this.app = app;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
