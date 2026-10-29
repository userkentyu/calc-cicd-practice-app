# calc-cicd-practice-app

「3時間で体験するCI/CD入門」のハンズオンで使う演習用プロジェクトです。このフォルダを、講座内で作成・操作していく「あなた自身のプロジェクト」として使います。

## 使い方

講座の指示に従って、このフォルダの中で以下を行っていきます。

1. （2章）`npm install --save-dev jest` でJestを導入し、`npm test` で`tests/sample.test.js`が実行できることを確認する
2. （3章）`src/calc.js` に計算機能（加算・減算・乗算・除算）を実装し、`tests/calc.test.js` にそのテストを書く
3. （4章）このフォルダをGitリポジトリとして初期化し、GitHubへアップロードする
4. （5章）`.github/workflows/test.yml` を作成し、GitHubへのpush時に自動でテストが実行される状態にする

`src/`フォルダは講座を始めた時点では空です。3章で作成する`calc.js`がここに入ります。

## 現在のフォルダ構成

```
sample-app/
├── package.json     # プロジェクト設定（雛形。まだJestは入っていません）
├── .gitignore        # node_modulesを除外する設定
├── src/              # 実装コードを置く場所（3章で calc.js を作成）
└── tests/
    └── sample.test.js  # 動作確認用のダミーテスト（2章で実行して確認）
```
