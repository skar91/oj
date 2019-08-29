const app = require('../../src/app');

describe('\'compile\' service', () => {
  it('registered the service', () => {
    const service = app.service('compile');
    expect(service).toBeTruthy();
  });
});
