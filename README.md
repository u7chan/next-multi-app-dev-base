# next-multi-app-dev-base

1つのNext.jsのプロジェクトで、複数のアプリケーション運用する為の開発基盤です。

Nginxのリバースプロキシとバーチャルホストを利用して、<br>
以下のアプリケーションパスをそれぞれのホストへマッピングします。

|before|after|
|-|-|
|localhost:3000/main|example.main.com:8080|
|localhost:3000/admin|example.admin.com:8080|
