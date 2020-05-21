/* import { Color, Mark } from "./enums";

export type Deck = NormalCard[]
// Deck 必须是一个数组， 数组的每一项必须是 NormalCard ,   type 类型别名。

export interface NormalCard {
    color: Color
    mark: Mark
}

export interface Joker {
    type: "big" | "small"
}

export interface Joker {
    type: "big" | "small"
} */



import { Color, Mark} from "./enums";
// import { normalize } from "path";

export type Deck = Card[];

export interface Card {
    getString(): string
}
export interface NormalCard extends Card {
    color: Color
    mark: Mark
}

export interface Joker extends Card {
    type: "big" | "small"
}

console.log(NormalCard)