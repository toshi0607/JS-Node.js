// モジュールの取り込み
var client = require('cheerio-httpcli');

// ダウンロード
var url = "http://www.aozora.gr.jp/index_pages/person81.html";
var param = {};
client.fetch(url, param, function (err, $, res) {
  // エラーがないかチェック
  if (err) { console.log("Error:", err); return; }
  // ダウンロードした結果を画面に表示
  var body = $.html();
  console.log(body);
})
