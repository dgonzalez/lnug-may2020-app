const convict = require('convict')
const path = require('path')
const config = convict({
  ip: {
    doc: 'The IP Address to bind.',
    default: '0.0.0.0',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'int',
    default: 3000,
    env: 'PORT'
  }
}).loadFile(path.join(__dirname, 'config.json')).validate()

module.exports = config
