'use strict'

var fecha = require('../src/utils/date')
var version = require('../package.json').version
var now = Date.now() + (480 + new Date().getTimezoneOffset()) * 60 * 1000

version = `v${version}.build${fecha.format(now, 'yyyyMMdd.HHmmss')}`

module.exports = {
  VERSION: `"${version}"`,
  NODE_ENV: '"production"'
}
