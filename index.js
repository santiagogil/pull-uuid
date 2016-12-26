var uuid = require('uuid')
var infinite = require('pull-stream/sources/infinite')

module.exports = function (options) {
  var _options = typeof options == 'object' ? options : {
    version: 'v4',
    uuidOpts: {},
    buffer: null,
    offset: 0
  }
  
  var version = _options.version
  var uuidOpts = _options.uuidOpts
  var buffer = _options.buffer
  var offset = _options.offset

  function withOpts () {
    return uuid[version](uuidOpts, buffer, offset)
  }
  return function (end, cb) {
    if(end) return cb(end)
      cb(null, withOpts())
  }
}
