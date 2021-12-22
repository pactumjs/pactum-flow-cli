require('../mocks');

const { mock } = require('pactum');

before(async () => {
  await mock.start();
});

after(async () => {
  await mock.stop();
});