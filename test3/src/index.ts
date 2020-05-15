// type Deck = NormalCard[]
// type Color = "♡" | "♤" | "♢"| "♣";

// import sayHello, { name, sum } from "./myModule";

// type NormalCard = {
//     color: Color
//     mark: number
// }

// function createDeck(): Deck {
//     const deck = Deck = [];
//     for (let i = 1; i <= 13; i++) {
//         deck.push({
//             color: "♡",
//             mark: i
//         })
//         deck.push({
//             color: "♤",
//             mark: i
//         })
//         deck.push({
//             color: "♣",
//             mark: i
//         })
//         deck.push({
//             color: "方块",
//             mark: i
//         })
//     }
//     return deck;

// }

// function printDeck(deck: Deck) {
//     deck.forEach(card => {
//         let str = card.color;
//         if (card.mark <= 10) {
//             str += card.mark;
//         }
//         switch (card.mark) {
//             case 11: 
//                 str += "J";
//                 break;
//             case 12:
//                 str += "Q";
//                 break;
//             case 13:
//                 str += "K";
//                 break;
//         }
//         console.log(str);
//     })
// }

// const deck = createDeck();
// printDeck (deck);


// enum Permission {
//     Read = 1,
//     Write = 2,
//     Create = 4,
//     Delete = 8,
// }

// let p:Permission = Permission.Read | Permission.Write;

// // 2. 如何判断是否拥有某个权限

// function hasPermission(target:Permission, per: Permission) {
//     return (target & per) === per;
// }

// // 判断变量p否拥有可读权限
// hasPermission(p, Permission.Read);




// console.log(name);
// console.log(sum(3, 4));
// // console.log(sayHello)
// sayHello();

// 这种形式适用于 export default 的方法。
// import aa from './myModule'

// console.log(aa.name)

// import * as fs from "fs";  // 导入所有的fs模块，别名叫做fs
// import {readFileSync} from "fs"
// import fs from "fs"
// const fs = require("fs")
// console.log(fs)
// fs.readFileSync("./")
// fs.readFileSync("./")


// interface User {
//     name: string,
//     age: number,
//     sayHello: () => void
//     // sayHello(): void 表示申明一个函数，函数没有返回值。
// }

// type User = {
//     name: string,
//     age: number,
//     sayHello: ()=> void
// }

// let u: User = {
//     name: "sdfds",
//     age: 33,
//     sayHello() {
//         console.log("asdf")
//     }
// }

// function sum(numbers:number[]) {
//     // numbers.forEach( () => {

//     // })
//     // numbers.filter
// }


/* type Condition = (n:number)=>boolean

function sum(numbers:number[], callBack: Condition) {
    let s = 0;
    numbers.forEach(n=>{
        if (callBack(n)) {
            s += n;
        }
    })
    return s;
}

const result = sum([3,4,5,7,11], n => n % 2 !== 0);
console.log(result); */


// interface Condition {
//     (n: number): boolean
// }

// function sum(numbers: number[], callBack: Condition) {
//     let s = 0;
//     numbers.forEach(n => {
//         if (callBack(n)) {
//             s += n;
//         }
//     })
//     return s;
// }


/* type Condition = { 
    //定界符 大括号里没有任何的成员名称，
    // 那么它表示只是一个定界符而已， 而不是一个对象
    (n: number): boolean   
} */



// 接口的继承  interface
// interface A {
//     T1: string
// }

// interface B extends A {
//     T2: number
// }

// let u:B = {
//     T2: 33,
//     T1: 'sss'
// }

// B必须包含A里面的所有成员，和自己本身的成员

// type 类型别名能不能实现 interface 继承的功能 ？
// type X = {
//     T1:string
// }
// type Y = {
//     T2:number
// }
// type Z = {
//     T1: number
//     T3:boolean
// } & X & Y

// let h: Z = {
//     T2: 33,
//     T1: "asd",
//     T3: true
// }





/* // readonly
let arr: readonly number[] = [3, 4, 6];
arr.push  // 你会发现arr没有了push,这些方法。 
arr = [4, 5, 6, 7];



// 限制该数组为只读数组，不能进行改变。


// const arr: readonly number[] = [3, 4, 6];
// const arr: ReadonlyArray<number> = [3,4,6]; */




// type 

