'use strict'

const fs = require('fs')
const path = require('path')
const build = require('../config').build
const version = require('../config/prod.env').VERSION

module.exports = function(value = false) {
  value = value || version
  let file = path.resolve(build.assetsRoot, 'version.json')
  console.log(`Saving version [${value}] to file [${file}]\n`)
  fs.writeFileSync(file, value);
}
