var API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=xml";

var request = require('request');
var fs = require('fs');
var parseString = require('xml2js').parseString;

request(API, function(err, response, body) {
  if (err || response.statusCode != 200) {
    console.log("ERROR", err); return;
  }
  parseString(body, function(err, result) {
    var jpy = result.kawase.JPY[0];
    var t = new Date();
    var fname = "USD_JPY_" +
      t.getFullYear() + "-" + (t.getMonth()+1) +
      "-" + t.getDay() + ".text";
    var text = "1usd=" + jpy + "jpy";
    console.log(text);
    fs.writeFile(fname, text);
  });
});
