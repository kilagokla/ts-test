import Task from './task';
import Subtask from './subtask';

const task = new Task('title');
const subtask = new Subtask('title 2', task);

console.log(task);
console.log(subtask);

// // ============================

// let stringValue = 'value';
// stringValue = 5;

// let notSure: any = 'value';
// notSure = 5;

// enum Color {
//   Red,
//   Green,
//   Blue
// }

// const arr: number[] = [];
// arr.push('ss');

// const arr1: Array<number> = [];
// arr1.push('ss');

// const func1 = (): void => {
//   console.log('hello');
// }

// const func2 = (): never => {
//   throw Error('error');
// }

// const func3 = (): never => {
//   while (true) { }
// }

// const value: any = 'some line';
// console.log((<string>value).toUpperCase());


// interface IPerson {
//   firstName: string;
//   lastName: string;
//   age?: number;
//   readonly ID: number;
// }

// const someFunc = (value1: string, value2?: string): void => { };

// class User implements IPerson {
//   public readonly ID;
//   // const someConstValue = 'test';

//   public get firstName(): string {
//     return this._firstName;
//   }

//   public get lastName(): string {
//     return this._lastName;
//   }

//   constructor(
//     private _firstName: string,
//     private _lastName: string
//   ) {
//     this.ID = Math.random();
//   }
// }

// class Admin {
//   public get firstName(): string {
//     return this._firstName;
//   }

//   public get lastName(): string {
//     return this._lastName;
//   }

//   constructor(
//     private _firstName: string,
//     private _lastName: string
//   ) { }
// }

// const greetFunc = (person: IPerson): void => {
//   console.log(`hello from ${person.firstName} ${person.lastName}`);
// }

// const user = new User('John', 'Doe');
// greetFunc(user);

// const admin = new Admin('John', 'Doe');
// greetFunc(admin);

// const anotherFunc = (): "yes" | "no" => {
//   return "yes";
// }

// // Public, private, and protected modifiers
// // Public by default

// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log("roaming the earth...");
//   }
// }

// const animal = new Animal();

// class Cat extends Animal {

//   constructor() {
//     super();
//   }

//   makeSound(): void {
//     throw new Error('Method not implemented.');
//   }
// }