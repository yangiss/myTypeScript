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




/* // 类型兼容性

interface Duck {
    sound: "嘎嘎嘎"
    swin(): void
}

let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎" as "嘎嘎嘎",  //类型断言
    swin() {
        console.log(this.name + `正在游泳，并发出了  ${this.sound}  的声音`)
    }
}

let duck: Duck = person;


interface ResponseUser {
    loginId: string
    nickName: string
    gender: "男" | "女"
}

// let duck: Duck = person;


// ? 表示该属性可以有，可以没有。可选参数
interface User {
    name?: string
    age: number
} */







class User {
    readonly id: number //不改变id 
    // public name: string
    oAge: number
    gender: "男" | "女" = "男"
    pid?: string // 相当于字符和undefined


    private _publishNumber: number = 3;  //每天一共可以发多少篇文章
    private _curNumber: number = 0;  // 当前可以发布的文章数量

    constructor(public name:string, age:number) {  // 语法糖，不加public 不知道是属性还是参数 算是简写模式
        this.id = Math.random();
        // this.name = name;
        this.oAge = age;
    }

    publish(title:string) {
        if (this._curNumber < this._publishNumber) {
            console.log("发布一篇文章：" + title);
            this._curNumber++;
        } else {
            console.log("你今日发布的文章数量已达到上线！")
        }
    }

    set age(value:number) {
        if (value < 0) {
            this.oAge = 0;
        } else {
            this.oAge = value;
        }
    }

    get age() {
        return Math.floor(this.oAge);
    }
}



const u = new User("aa", 2.3);
u.publish("ddd");
u.publish("ddd");
u.publish("ddd");
u.publish("ddd");
// u.curNumber = 33;
// u.name = "sdda"
// console.log(u)
// u.publishNumber = 1000


u.age = -2
console.log(u.age)
// console.log(u);


console.log(u)
