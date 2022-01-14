const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// 静的アセットファイルを格納しているディレクトリを一気に読み込む
app.use(express.static('out'));

// 以下のGETリクエスト処理を記載することで動的ルーティングが可能になる
app.get('/main/:test', (req, res) => {
  res.sendFile(__dirname + '/out/main/[test].html');
});

app.listen(port, hostname, () => {
  console.log(`Express app listening at http://${hostname}:${port}`);
});
