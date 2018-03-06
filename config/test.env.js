'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"',
  PORT: '8080',
  HOST: '"localhost"',
  API: '"http://localhost:3000/api"'
})
