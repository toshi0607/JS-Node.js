// モジュールの取り込み
var fs = require('fs');

// フォルダを同期的に作成する
console.log("mkdirを実行します");
fs.mkdirSync("test-sync");
console.log("mkdirを完了しました");
