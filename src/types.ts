import { Color, Mark } from "./enums";

export type Deck = NormalCard[]
// Deck 必须是一个数组， 数组的每一项必须是 NormalCard ,   type 类型别名。

export interface NormalCard {
    color: Color
    mark: Mark
}

export interface Joker {
    type: "big" | "small"
}


type User = {
    name: string
    age: number
    gender: "男"|"女"
}

let u:User

function getUsers():User[] {
    return [1];
}
