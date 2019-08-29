const app = require('../../src/app');

describe('\'problems\' service', () => {
  it('registered the service', () => {
    const service = app.service('problems');
    expect(service).toBeTruthy();
  });
});
