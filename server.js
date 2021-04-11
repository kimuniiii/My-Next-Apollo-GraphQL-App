// 外部モジュール読み込み
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
// アプリケーションレベルのミドルウェア作成
const app = next({ dev });
// https://github.com/vercel/next.js/blob/2c2ac2e868b0edbaddd7ae2ea3d6cdf3023beae9/packages/next/server/next.ts#L31
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // カスタムルートを既存のルートにマッピングさせる
    // これがないと「/posts/detail/Title1」にアクセスすると404エラーになる
    server.get('/posts/detail/:title', (req, res) => {
      const actualPage = '/posts/detail';
      const queryParams = { title: req.params.title };
      app.render(req, res, actualPage, queryParams);
    });

    // * : 直前の文字が0回以上繰り返す場合にマッチ
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // serverを待ち受け状態にする
    server.listen(3005, (error) => {
      if (error) throw error;
      console.log('Ready on http://localhost:3005');
    });
  })
  .catch((error) => {
    console.error(error.message);
    // process.exit()をコールすることで、異常終了させる
    process.exit(1);
  });
