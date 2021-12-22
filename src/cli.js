#!/usr/bin/env node

const sade = require('sade');
const prog = sade('pactum-flow-cli');

const { run } = require('./utils');
const update_environment = require('./commands/update-environment');

prog
  .option('--url', 'pactumjs flow server url')
  .option('--user, -u', 'username')
  .option('--pass, -p', 'password');

prog
  .command('update environment')
  .describe('updates environment with the given project and version')
  .option('--proj', 'project id')
  .option('--vers', 'version')
  .option('--env', 'environment')
  .example('update environment --proj user-service --vers 1.2.3 --env production  --url http://pactumjs.flows.com --user scanner --pass scanner')
  .action(async (opts) => {
    await run(update_environment, opts);
  });


prog.parse(process.argv);