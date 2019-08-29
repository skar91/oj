const app = require('../../src/app');

describe('\'execute\' service', () => {
  it('registered the service', () => {
    const service = app.service('execute');
    expect(service).toBeTruthy();
  });
});
