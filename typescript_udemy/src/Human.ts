interface Human {
  name: string;
  age?: number;
  greeting(meg: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age?: number) {}
  greeting(msg: string): void {
    console.log(msg);
  }
}
const dev = new Developer('John', 20);
// const dev = new Developer('John');
console.log(dev.name);
console.log(dev.age);
dev.greeting(dev.name);
