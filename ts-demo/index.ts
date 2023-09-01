function add(x: number, y: number) {
  return x + y;
}

// let helloWorld: "Hello World" | "Hello" = "Hello World";

// console.log("1,2", add(1, 2)); //sy-log

// // ! 2

interface User {
  name: string;
  id: number;
  age?: number;
}

class UserAccount {
  constructor(public name: string, public id: number) {
    this.name = name;
    this.id = id;
  }
}

// const user: { name: string; id: number } = new UserAccount("Murphy", 1);

const user: User = new UserAccount("Murphy", 1);

console.log("user", user); //sy-log
