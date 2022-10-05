# README

## 概要

- 上がるまでツモる、切るを一人で繰り返す
- 切るときは、待ち牌の変化やシャンテン数の増減を視覚的に確認できるので、それで牌効率を学習することを目的としている

## 開発環境構築手順

```bash
$ git clone git@github.com:k0kishima/mahjong-solo.git
$ cd mahjong-solo 
$ yarn install
```

## 遊び方

ローカルでの場合の一例

### 依存サービスの環境構築

依存サービスである麻雀APIを起動しておく

- https://github.com/k0kishima/mahjong_api

### 環境変数の設定

環境変数を設定して前節のAPIへリクエストが向くようにする

https://github.com/k0kishima/mahjong-solo/blob/117e064917913af3b85258bee8815fcaabf4500a/src/config/index.ts#L2

### 起動

```bash
yarn start
```

こんな感じで遊べます。

https://user-images.githubusercontent.com/56298669/194043753-664ae2e2-1e83-48ad-8db6-adceaea13355.mov

※ 現時点でフリテンの考慮などはないです
