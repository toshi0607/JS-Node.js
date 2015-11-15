var TARGET_URL = "http://google.co.jp";

var casper = require('casper').create();
casper.start();

casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OSX) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53');

casper.viewport(750, 1334);

casper.open(TARGET_URL);

casper.then(function(){
  this.capture('screenshot2.png');
});

casper.run();
