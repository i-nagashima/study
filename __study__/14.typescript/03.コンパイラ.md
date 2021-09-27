# watch モード

```zsh
# グローバルの場合　グローバルの場合PATHを通す必要あり
$ tsc xxx.ts -w

# ローカルの場合
$ npx tsc xxx.ts -w
```

<br />

# --init で tsconfig.json

```zsh
# グローバルの場合　グローバルの場合PATHを通す必要あり
$ tsc --init

# ローカルの場合
$ npx tsc --init
```

<br />

# include と exclude

```js
// 特定のファイルを含む
"include": [
  "index.ts",
  "*.spec.ts",
  "**/compiler.ts"
],

// 特定のファイルを除く
"exclude": [
  "compiler.ts",
  "*.spec.ts",
  "**/compiler.ts",
  "node_modules"  // デフォルトでは入っているが明示した場合は記述する必要あり
],

// 絶対パスで指定する
"files": [
  "/tmp/compiler.ts"
]
```

<br />

# target

指定しない場合は `es3`

<br />

# lib

※まぁ指定しないよな

```js
// es6 の場合
"lib": [
  "ES6",
  "DOM",
  "DOM.Iterable",
  "ScriptHost"
]
```

<br />

# allorJs, checkJs, jsx, declaration, declarationMap

- allorJs  
  JavaScript ファイルをコンパイルする
- checkJs  
  allowJs と一緒に
- jsx  
  React で使う
- declaration  
  .d.ts（型定義ファイル） を作る
- declarationMap  
  .d.ts（型定義ファイル） を作る

<br />

# sourceMap

ブラウザで TypeScript を見るために使う

<br />

# outDir, rootDir, removeComments, noEmit

- outDir  
  js ファイルの出力先  
  ./dist
- rootDir  
  コンパイルするルート。outDir でありのまま出力するために使う。  
  ./src
- removeComments  
  コメントを消すかどうか
- noEmit  
  何も出力しない。コンパイル（チェックだけ）して js ファイルは出力しない。

<br />

# noEmitOnEroor (tsconfig にはない)

コンパイルに失敗したものは出力しない

<br />

# Strict Type-Checking Options

- strict: true  
  以下のすべてが true になる
- noImplicitAny  
  暗黙的は any はエラーにする
- strictNullChecks  
  string とかに null と undefine を入れるとエラーにする  
  union は除く
- strictFunctionTypes  
  クラスの継承時に起こり得るバグをエラーにする
- strictBindCallApply  
  call とか bind の引数をチェックしてエラーにする
- strictPropertyInitialization  
  クラスを使用するときに使う
- noImplicitThis  
  this が何を示しているのかわからない場合はエラーにする
- alwaysStrict  
  常に"useStrict"を記述するか
