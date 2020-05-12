// let name:string;

// name = 333;


/* function sum(a: number, b: number): number {
    return a + b;
}

let num: number = sum(3, 5)


// 简写，因为sum1能够
function sum1(a: number, b: number) {
    return a + b;
}

let num1 = sum1(3, 5); */


// let name = "Kevin";
// name = 123;


// 约定，nums是数组，并且数组的每一项是number类型。三种不同的写法，意思都一样。
// let nums: number[] = [3, 4, 5];  
// let nums1= [3, 4, 5];  
// let nums2: Array<number> = [3, 4, 5];

// function printValues(obj: object) {
//     const vals = Object.values(obj)
//     vals.forEach(v => console.log(v));

// }

// printValues({
//     name: "afd",
//     age: 33,
//     cc: 22
// })

// let x: [string, number];
// x = ['hello', 10];
// console.log(x[0].substr(1));

// x[3] = 'world';


// // any 类型的隐患
// let data:any = "sfsdf";
// let num:number = data;

// let name:string = undefined;

// let myName: string | undefined = undefined;



/* let myName: string | undefined;
if (typeof myName === 'string') {
    // 类型保护
    myName
} */


// void 约束函数，表示该函数没有返回值。
// function printMenu(): void {
//     console.log("1. 登录")
//     console.log("2. 注册");
// }


// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;


// never 永远不会返回
// function throwError(msg: string) {
//     throw new Error(msg);

// }

// never 永远不会结束
function alwaysDoSomething() {
    while(true) {
        console.log(1)
    }
}

let a: "A";
a = "A";

// 字面量约束
let gender: "男" | "女"
gender = "男"



// 不太使用这种方式约束，字面量
// let user: {
//     name: string
//     age: number
// }

// user = {
//     name: "34",
//     age: 33
// }

// let u:{
//     name: string
//     age: number
//     gender: "男"
// }


function combine(a:number | string, b:number | string):number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("a和b必须是相同的类型");
}
combine(3, "b");


// ? 表示可选参数
function sum(a: number, b: number, c?: number) {

}
sum(3, 4)