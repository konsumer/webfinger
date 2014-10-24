# webfinger

webfinger protocol lib for diaspora with node.js

## Install

`npm install konsumer/webfinger`

## Use

```javascript
var webfinger = require('webfinger');
webfinger('konsumer@diasp.org',function(err, info){
  if (err) throw err;
  console.log(info);
});
```
