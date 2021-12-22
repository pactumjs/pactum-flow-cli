const { addInteractionHandler } = require('pactum').handler;

addInteractionHandler('post session', () => {
  return {
    request: {
      method: 'POST',
      path: '/api/flow/captain/v1/session'
    },
    response: {
      status: 200,
      body: {
        token: 'abc'
      }
    }
  }
});