abstract class Base {
  public abstract p_baseHoge(): void;
  protected abstract pr_baseHoge(): void;

  public call_pr_baseHoge(): void {
    this.pr_baseHoge();
  }
}

class Person extends Base {
  constructor(private _name: string, private _age: number) {
    super();
  }

  public getName(): string {
    return this._name;
  }
  public getAge(): number {
    return this._age;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  public static getName(): string {
    return 'john';
  }
  public static getAge(): number {
    return 20;
  }

  public p_baseHoge(): void {
    console.log('public baseHoge');
    this.pr_baseHoge();
  }
  protected pr_baseHoge(): void {
    console.log('protected baseHoge');
  }
}

console.log(Person.getName());
console.log(Person.getAge());

const person = new Person('mic', 30);
console.log(person.getName());
console.log(person.getAge());
console.log(person.name);
console.log(person.age);
person.name = 'hoge';
person.age = 100;
console.log(person.name);
console.log(person.age);
person.p_baseHoge();
person.call_pr_baseHoge();
