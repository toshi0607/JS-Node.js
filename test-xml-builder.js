var xml2js = require('xml2js');

var obj = {
  item: {name:"Banana", price:150}
};

var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);
