const request = require('phin-retry');

async function run(opts) {
  if (!opts.proj) throw Error('`--proj` is required');
  if (opts.vers === undefined) throw Error('`--env` is required');
  if (!opts.env) throw Error('`--env` is required');
  const url = `${opts.url}/api/flow/v1/environments`;
  await request.post({
    url,
    headers: {
      'x-session-token': opts.session_token
    },
    body: {
      projectId: opts.proj,
      version: opts.vers.toString(),
      environment: opts.env
    }
  });
}

module.exports = {
  run
}