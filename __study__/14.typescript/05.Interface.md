# 使い方

```ts
interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string): void {
    console.log();
  },
};
```

<br />

# impliments (クラス)

```ts
interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greeting(message: string): void {
    console.log();
  }
}
```

<br />

# Interface のオブジェクトで使う

```ts
// Human (Interface)を使う
const developer: Human = new Developer('John', 20);
```

<br />

# Interface の継承

```ts
interface Nameable {
  name: string;
}

interface Human extends Nameable {
  age: number;
  greeting(msg: string): void;
}
```

<br />

# Interface で関数の型

※ほぼ使わない

```ts
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};
```

<br />

# ? を使って、あってもなくてもよいオブジェクト

フィールドとメソッドにつけることができる

```ts
interface Human {
  name: string;
  age?: number;
}

class Developer implements Human {
  constructor(public name: string, public age?: number) {}
}
```
