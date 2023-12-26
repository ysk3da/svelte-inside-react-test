# マイクロフロントエンド的に、ReactアプリにSvelteでコンポーネントを入れてみるテスト

TypeScript周りに不安があるが、とりあえず動くものができた。

module federationのように各アプリに分割し、サーバを複数立てて、ホストアプリに統合するようなことをせずにマイクロフロントエンドっぽいことが可能。

jQuery部分を切り出す -> React SPA -> Next.js みたいなルートで部分的に改修していくときに利用するとどうだろうか。  
前半はWebpackのloader設定とか環境構築に時間かかりそうなので、知見を探しておくのがベターか。  
そも、バックエンドの作り次第のところはあるので、フロントエンドだけで話題にするのは無理がある。

最大のメリットはReactにもVueにも追加できることであろうと思います。

あとは静的なページのコンテンツであればマークアップしかないので、デザイナーさんにも編集可能であること。  
HTMLとCSSがセットなので見た目で分割できていること。(コンポーネントというには粒度設定やjsどこまで含めるかなどルールは必要そう。なんでもありになったら本末転倒である)

## Vite react側から svelte in reactを実現しようとしたが、うまく行かずだったので、逆に vite svelteではじめてreactを入れてみる

- [参考動画](https://www.youtube.com/watch?v=FrusJNycQvk)

なんとか全部できた。
振り返りとしては、TypeScript + Svelte周りの設定が不足していた。
特に、`src/vite-env.d.ts`に`/// <reference types="svelte" />`書いてなかったので、うまく連携できてないことが発覚。Viteそのものへの理解不足が露呈したので、追加で勉強を。

動画の通りにコードを書くとReactのエラーで動かない。
エラーの指摘通り、App関数コンポーネント内でReact Hooksを利用することが重要。

## WIP

TODO

- ESlintのSvelte側の設定
- ts-ignoreの解決


## Reference

- [Next.js + SvelteによるnoteのフロントエンドApp分割](https://note.jp/n/n7f757d7050f6)
- [ReactとSvelteでマイクロフロントエンドを行う二つの方法を試してみる](https://engineering.nifty.co.jp/blog/3859)