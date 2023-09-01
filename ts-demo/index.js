function add(x, y) {
    return x + y;
}
console.log("1,2", add(1, 2)); //sy-log
// ! 2
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user: any = { firstName: "Jane", lastName: "User" };
// class Student {
//   private fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
//   editName = (name: string) => {
//     this.fullName = name;
//   };
// }
// user = new Student("Jane", "M.", "User");
// console.log(greeter(user)); //sy-log
// user.editName("abc");
// console.log(user.fullName); //sy-log
// interface User {
//   name: string;
//   id: number;
// }
// class UserAccount {
//   constructor(public name: string, public id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }
// const user: User = new UserAccount("Murphy", 1);
// console.log("user", user); //sy-log
