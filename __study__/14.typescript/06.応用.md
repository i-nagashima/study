# インターセクション型 (A かつ B)

### type でやる場合

```ts
type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

type EngineerBlogger = Engineer & Blogger;
```

### interface でやる場合

```ts
interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

interface EngineerBlogger extends Engineer, Blogger {}
```

<br />

# typeof, in, instanceof

### typeof

標準的な型しか使えない

```ts
if (typeof xxx === 'string')
```

### in

オブジェクトに'foo'があるか

```ts
if ('foo' in xxx)
```

### instanceof

オブジェクトの型がそれか(クラス)

```ts
if (yyy instalce of xxx)
```

<br />

# タグ付き Union

[タグ付き共用型](https://atmarkit.itmedia.co.jp/ait/articles/1611/08/news029_2.html)

```ts
class Doc {
  kind: 'doc' = 'doc';
}
```

これで型を定義する

<br />

# 型アサーション (キャスト)

### 例)

getElementById は HTMLElement | null になる  
本当は HTMLInputElement がほしい

```ts
const input = document.getElementById('input');
```

### 型アサーション その１

```ts
const input = <HTMLInputElement>document.getElementById('input');
```

### 型アサーション その２

```ts
const input = document.getElementById('input') as HTMLInputElement;
```

jsx を使用する場合は その２ がよい

<br />

# !(Non-null assertion operator)

これは null じゃないと言い切る

```ts
const input = document.getElementById('input')!;
```

<br />

# 関数のオーバーロード

```ts
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase('Hello');
```

※upperHello は string | number となってしまうので上にオーバーロードを記述する
