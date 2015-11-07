// モジュールの取り込み
var fs = require('fs');

// フォルダヲ同期的に作成する
if (!fs.existsSync("test3")) {
  fs.mkdirSync("test3");
  console.log("test3を作成しました");
} else {
  console.log("test3はすでにあるので作成しません");
}
