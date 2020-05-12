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
let nums = [3, 4, 5];
let nums1 = [3, 4, 5];
let nums2 = [3, 4, 5];
function printValues(obj) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}
printValues({
    name: "afd",
    age: 33
});
