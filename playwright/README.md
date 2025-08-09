# Playwright Component Testing Template

このディレクトリは Playwright Component Testing（CT）のためのテンプレートファイルを格納しています。

## ファイル構成

- `index.html` - コンポーネントテストの HTML テンプレート
- `index.tsx` - テスト環境のエントリーポイント（CSS の読み込みなど）
- `.cache/` - ビルド成果物のキャッシュ（gitignore 対象）

## 用途

Playwright のコンポーネントテスト（`*.ct.tsx` ファイル）を実行する際に必要な設定ファイルです。
`pnpm ct-test` コマンドでコンポーネント単体のテストを実行できます。