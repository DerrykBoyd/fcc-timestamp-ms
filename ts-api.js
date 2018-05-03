var moment = require('moment');

exports.time = function(req, res) {
  var p = req.params.time;
  if (!isNaN(p)) p = Number(p)*1000;
  var result = {};
  var unix = moment(p).valueOf()/1000;
  var natural = moment(p).format("MMMM DD, YYYY");
  if (isNaN(unix)) {
    result.unix = null;
    result.natural = null;
  } else {
    result.unix = unix;
    result.natural = natural;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(result));
  res.end();
}