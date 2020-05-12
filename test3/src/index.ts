// type Deck = NormalCard[]
// type Color = "♡" | "♤" | "♢"| "♣";

import sayHello, { name, sum } from "./myModule";

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




console.log(name);
console.log(sum(3, 4));
// console.log(sayHello)
sayHello();

// 这种形式适用于 export default 的方法。
// import aa from './myModule'

// console.log(aa.name)

// import * as fs from "fs";  // 导入所有的fs模块，别名叫做fs
// import {readFileSync} from "fs"
import fs from "fs"
// const fs = require("fs")
console.log(fs)
// fs.readFileSync("./")
fs.readFileSync("./")