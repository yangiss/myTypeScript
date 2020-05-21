import { Color, Mark } from "./enums";
import { Deck, Card, Joker } from "./types";

export function createDeck(): Deck {
    const deck: Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            } as Card)
        }
    }
    let joker:Joker = {
        type: "small",
        getString() {
            return "jo";
        }
    }
    deck.push(joker)
    joker = {
        type: "big",
        getString() {
            return "JO"
        }
    }
    deck.push(joker);
    return deck;
}


export function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach( (card, i) => {
        result += card.getString() + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
        console.log(result);
    })
}



// interface Duck {
//     sound: "嘎嘎嘎"
//     swin(): void
// }

// let person = {
//     name: "伪装成鸭子的人",
//     age: 11,
//     sound: "嘎嘎嘎" as "嘎嘎嘎",  //类型断言   为什么会这样，因为这里是一个字面量是在赋值，不是在类型约束
//     swin() {
//         console.log(this.name + `正在游泳，并发出了  ${this.sound}  的声音`)
//     }
// }

// let duck: Duck = person;

// let aa: Duck = {
//     sound: "嘎嘎嘎",
//     swin(){
        
//     }
// }

// let bb = {
//     sound: "嘎嘎嘎",
//     swin(){
        
//     }
// }

// let cc: Duck = bb;  // 更严格的类型检查，sound被认为是一个字符串。

