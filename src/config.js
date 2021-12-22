const config = {
  url: process.env['PACTUM_FLOW_URL'] || '',
  username: process.env['PACTUM_FLOW_USERNAME'] || '',
  password: process.env['PACTUM_FLOW_PASSWORD'] || ''
}

module.exports = config;