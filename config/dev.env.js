'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL: process.env.API_URL || '"http://localhost:8081"'
})
