var url = require('url'),
  request = require('request')
  parse = require('xml2js').parseString;

function getXML(url, cb){
  request.get(url, function(err, res, body){
    if (err) return cb(err);
    parse(body, cb);
  });
}

var keyMap = {
  "http://microformats.org/profile/hcard": 'hcard',
  "http://joindiaspora.com/seed_location": 'seed_location',
  "http://joindiaspora.com/guid": 'guid',
  "http://webfinger.net/rel/profile-page": 'profile',
  "http://schemas.google.com/g/2010#updates-from": 'atom',
  "diaspora-public-key": 'pubkey'
};

module.exports = function(user, cb){
  var u = user.split('@');
  if (u.length != 2) return cb('User should be username@pod.com');
  getXML('http://'+u[1]+'/.well-known/host-meta', function(err,host){
    if (err) return cb(err);
    getXML(host.XRD.Link[0].$.template.replace(/{uri}/g, encodeURIComponent(user)), function(err, card){
      var out ={};
      var keys = Object.keys(keyMap);
      card.XRD.Link.forEach(function(link){
        if (keys.indexOf(link.$.rel) !== -1){
          out[ keyMap[link.$.rel] ] = link.$.href;
        }
      });
      cb(null, out);
    });
  });
}
