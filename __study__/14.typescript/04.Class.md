# クラスを型として使う

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greeting(): void {}
}
let person: Person;
```

<br />

# public 修飾子と private 修飾子

### private

private をつける。フィールド、メソッド

### public

public をつける、もしくはつけない。フィールド、メソッド

<br />

# 初期化の処理を省略

```ts
constructor(private name: string, private age: number) {

}
```

<br />

# readonly 修飾子

private readonly

public readonly

<br />

# extends

ES6 と一緒

<br />

# protected 修飾子

### protected

protected をつける。フィールド、メソッド

<br />

# ゲッター、セッター

```ts
get name(): string {
  return this._name;
}

// 戻り値に:voidをつけることはできない
set name(value) {
  this._name = value;
}
```

<br />

# static

private static

public static

protected static

<br />

# Abstruct

```ts
// クラス
abstract class Class {
  // メソッド
  public abstract methos(): void {}
  protected abstract methos(): void {}
}
```
