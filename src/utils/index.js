const request = require('phin-retry');

const config = require('../config');

async function getSessionToken(opts) {
  const url = `${opts.url}/api/flow/captain/v1/session`;
  const res = await request.post({
    url,
    core: {
      auth: `${opts.user}:${opts.pass}`
    }
  });
  return res.token;
}

async function run(command, opts) {
  try {
    if (!opts.url) throw Error('`--url` is required');
    if (!opts.user) throw Error('`--user` is required');
    if (!opts.pass) throw Error('`--pass` is required');
    opts.url = opts.url ? opts.url : config.url;
    opts.username = opts.username ? opts.username : config.username;
    opts.password = opts.password ? opts.password : config.password;
    const session_token = await getSessionToken(opts);
    opts.session_token = session_token;
    await command.run(opts);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  run
}