const { addInteractionHandler } = require('pactum').handler;

addInteractionHandler('update environment', () => {
  return {
    request: {
      method: 'POST',
      path: '/api/flow/v1/environments',
      body: {
        projectId: 'user-service',
        version: '1.0.1',
        environment: 'test'
      }
    },
    response: {
      status: 200
    }
  }
})