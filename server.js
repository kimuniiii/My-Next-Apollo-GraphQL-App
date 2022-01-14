const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;

// 静的アセットファイルを格納しているディレクトリを一気に読み込む
// http://127.0.0.1:8080/lazy-image.html でアクセス可能になる
// .html拡張子 を付け忘れるとエラーになるので注意する
app.use(express.static('out'));

// 以下のGETリクエスト処理を記載することで動的ルーティングが可能になる
app.get('/main/:test', (req, res) => {
  res.sendFile(__dirname + '/out/main/[test].html');
});

app.listen(port, hostname, () => {
  console.log(`Express app listening at http://${hostname}:${port}`);
});
