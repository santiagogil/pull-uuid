# pull-uuid

[![Greenkeeper badge](https://badges.greenkeeper.io/santiagogil/pull-uuid.svg)](https://greenkeeper.io/)
uuid generation as an infitite pull stream

## Usage

```js
var pullUuid = require('pull-uuid')

var buf = new Buffer(16)
var options = {
  version: 'v4',
  uuidOpts: {},
  buffer: buf,
  offset: 0
}

var uuid = pullUuid(options)
```
If no options object is provided it will generate uuid v4 strings.


  
