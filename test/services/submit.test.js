const app = require('../../src/app');

describe('\'submit\' service', () => {
  it('registered the service', () => {
    const service = app.service('submit');
    expect(service).toBeTruthy();
  });
});
