/* データ型（基本）
------------------------------------------------ */
// boolean
const a = true;
// number
const a = 0;
// string
const a = 'hoge';
// object
const obj = {};
// データ型を調べる
typeof a;

/* 変数
------------------------------------------------ */
// ブロックスコープ
const a = 0;
let a = 0;
// varはつかわない 全てグローバルスコープになる
var a = 0;

/* 関数
 * 関数は実行可能なオブジェクトである
------------------------------------------------ */
// 普通
function func(params) {
    
}
// 関数式
const func = function(params) {

}
// 無名関数 引数に関数を渡す場合など
func(function(params) {
    
});
// 関数でオブジェクトを返してみる
function func(params) {
    return {
        a: 0,
        func: function(params) {
            
        }
    };
}
// 即時関数（aには戻り値）
const a = (function(params) {
    // プリミティブ
    return 0;
    // 関数
    return function(params) {
        
    }
})(params);
// 即時関数（オブジェクトが戻り値）
const obj = (function(params) {
    const a = 0;
    const b = 0;
    return {
        a: a,   // 同じ名前ならaだけでいい
        b: b    // 同じ名前ならbだけでいい
    };
})(params);
// 関数は実行可能なオブジェクトである
function func(params) {
    
}
func.prop = 0;  // プロパティ
func.method = function(params) {    // メソッド
    
}
func(); // 実行可能
func.method();  // メソッドをキック

/* コールバック
------------------------------------------------ */
// 基本
function callback(params) {
    console.log('callback call ' + params);
}
function func1(callback) {
    callback('hoge');
}
func1(callback);   // 関数（コールバック）を渡す
// 無名関数で
func1(function(params) {
    console.log('no name func call ' + params);
});

/* アロー関数
 * this, arguments, new , prototype は使用できない
------------------------------------------------ */
// 基本
const func = (params) => {
    return 'hoge';
}
// オブジェクトで定義する
const obj = {
    func: (params) => {

    }
}
// ↑ の簡易版
const obj = {
    func(params) {

    }
}

/* コンストラクター関数
 * 新しくオブジェクトを作成するための雛形となる関数
 * オブジェクトだよオブジェクト
 * プロトタイプ
 * 　・オブジェクトに存在する特別なプロパティ
 * 　・コンストラクター関数と合わせて使用
 * 　・プロトタイプを使用したほうがメモリの効率が良い
 * 　・インスタンス化した際にはprototypeの参照が__proto__にコピーされる
------------------------------------------------ */
// 基本
function Func(prop) {
    this.prop = prop;
}
Func.prototype.func = function(params) {

}
// new で使ってみる
const instance = new Func(1);
/* プロトタイプ継承
 * 別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること
------------------------------------------------ */
function ChildFunc(prop) {
    
}
ChildFunc.prototype = Object.create(Func.prototype);

/* クラス
 * コンストラクター関数をクラス表記で書けるようにしたもの → シンタックスシュガー
 * もうコンストラクター関数は使わなくていいんじゃないか
 * クラスの場合は関数とはいわない　メソッドという
------------------------------------------------ */
// 通常
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {

    }
}
// 継承の場合
class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
}
// get set を使う
class Person2 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this.name = value;
    }
}
// staticメソッド
class Person3 {
    static hello() {

    }    
}
Person3.hello();

/* オブジェクト
 * オブジェクトは参照を名前付きで管理している入れ物である
------------------------------------------------ */
// 普通
const obj = {
    a: 0,
    func: function(params) {
        
    }
}

/* 分割代入
 * オブジェクトから特定のプロパティを抽出して宣言を行う
 * 代入された変数はコピー
------------------------------------------------ */
// 基本
const { a, b: _b } = object;
// 関数の引数に分割代入を使う
function func({ a, b }) {
    
}

/* スプレット構文 レスト構文
------------------------------------------------ */
const array = [1, 2, 3, 4, 5];
// 関数へ
function func(...array) {
    const _0 = array[0];
}

/* this
 * オブジェクトのメソッドとして実行される場合
 * 'this' => 呼び出し元オブジェクト
 * 関数として実行される場合
 * 'this' => グローバルオブジェクト
------------------------------------------------ */
// bindによる束縛
// bindによって'this'や引数をっ固定した新しい関数を作成
// 使用時点では実行しない
obj.method.bind(obj, 'arg');
// call, apply
// 'this'や引数の参照先を変更
// 同時に関数を実行する
func.call(obj, 'arg1', 'arg2');
func.apply(obj, ['arg1', 'arg2']);

/* for...in
 * 列挙可能プロパティに対して順不同で反復処理を実行する
 * オブジェクトのプロパティを回すときに使う
------------------------------------------------ */
const obj = {
    prop1: 1,
    prop2: 2,
    func: function() {
        
    }
}
for (const key in obj) {
    // keyにはプロパティ名が入る
    // 取得は以下
    const prop = obj[key];
}

/* for...of
 * イテレータを持つオブジェクトの反復操作を行う
 * String Array Map Set arguments etc...
 ----------------------------------------------- */
const array = [1, 2, 3, 4];
for (const iterator of array) {
    // iteratorには値が入る
}

/* forEach
 * イテレータを持つオブジェクトの反復操作を行う
 * for...ofのインデックスがある版みたいな
 ----------------------------------------------- */
 array.forEach((value, index) => {
    // valueには値
    // indexにはインデックス
});

/* ジェネレータ
 * yieldを使う
------------------------------------------------ */
function* func() {
    yield value;
    return value;   // これで終わり
}

/* Promise
 * 非同期処理をより簡単に、可読性が上がるように書けるようにしたもの
------------------------------------------------ */
// 通常
new Promise(function(resolve, reject) {
    // ここは同期処理になる
    resolve('hello');
})
.then(function(data) {
    return data;    // 次のthenに渡すデータ
})
.then(function(data) {
    throw new Error();
})
.catch(function(data) {
    
})
.finally(function() {
    
});

/* async
 * Promiseを返却する関数の宣言を行う
 * await
 * Promiseを返却する関数の非同期処理が完了するまで待つ
------------------------------------------------ */
// 通常
async function init() {
    // sleepはPromiseを返す関数
    let val = await sleep(0);
    val = await sleep(1);
    val = await sleep(1);
}
