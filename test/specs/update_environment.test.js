const { mock } = require('pactum');

const { run } = require('../../src/utils');
const ue = require('../../src/commands/update-environment');

describe('update environment', () => {

  afterEach(() => {
    mock.clearInteractions();
  });

  it('run', async () => {
    mock.addInteraction('post session');
    mock.addInteraction('update environment');
    const opts = { 
      url: 'http://localhost:9393',
      user: 'admin',
      pass: 'admin',
      proj: 'user-service',
      vers: '1.0.1',
      env: 'test'
    };
    await run(ue, opts);
  });

});