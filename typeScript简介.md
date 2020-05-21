[toc]
# TS基础入门
## 为什么学习typeScript?

- 就业获得更大优势
- 获得更好的开发体验
- 解决JS中一些难以处理的问题
- 减少开发成本，项目周期。


## JS开发中的问题

- 使用了不存在的变量、函数或成员
- 把一个不确定的类型当作一个确定的类型处理
- 在使用null或undefined的成员

js的原罪
- js本身的特性，决定了该语言无法适应大型的复杂的项目。
- 弱类型： 某个变量，可以随时更换类型。
- 解释型： 错误发生的时间，是在运行时。

前端开发中，大部分的时间都是在排错。

## TypeScript
TypeScript 是 JavaScript 的一个超集，主要提供了 类型系统 和对 ES6 的支持，由 Microsoft 开发。

应用：vue3.0，angular2.0，vscode...

- 编译型语言：编译为 js 后运行，单独无法运行;
- 强类型语言;
- 面向对象的语言;


浏览器，node环境中都无法直接识别ts代码
> babel: es6 -> es5  
> tsc: ts -> es

tsc: ts编译器
静态： 类型检查发生的时间，在编译的时候，而非运行时。  
TS 不参与任何运行时的代码。

**TS常识**
- 2012年微软发布
- Anders Hejlsberg 负责开发TS项目


    默认情况下,TS会做出下面几种假设：
    1. 假设当前的执行环境是dom
    2. 如果代码中没有使用模块化语句（import、export）,便认为该代码是全局执行
    3. 编译的目标代码是ES3

    有两种方式更该以上假设：
    
    1. 使用tsc命令行的时候，加上选项参数
    2. 使用ts配置文件，更改编译选项


## TS的配置文件
tsc --init  生成一个
使用了配置文件后，使用tsc进行编译时，不能跟上文件名。如果用了，就会忽略配置文件。  
所以：我们有配置文件，就只要直接使用tsc 命令就行了。

安装 @types/node    cnpm i @types/node -D

@types/node  
@types是一个ts官方的类型库，其中包含了很多js代码的类型描述。

> Jquery: 用js写的，没有类型检查
> 安装@types/jquery, 为jquery库添加类型定义


## 使用第三方库简化流程
ts-node: 将ts代码在内存中完成编译，同时完成运行。

nodemon: 用于检测文件的变化
> "dev": "nodemon watch src -e -ts --exec ts-node src/index.ts"
watch src  只监视 src 文件夹下的文件
-e -ts :   只监视 ts文件




## 基本类型约束

> TS是一个可选的静态的类型系统

## 如何进行类型约束

仅需要在 变量、函数的参数、函数的返回值位置加上```类型:```

ts在很多场景中可以完成类型推导

any: 表示任意类型，对该类型，ts不进行类型检查

> 小技巧，如何区分数字字符串和数字，关键看怎么读？  
> 如果按照数字的方式朗读，则为数字；否则，为字符串。

## 源代码和编译结果的差异
编译结果中没有类型约束信息

## 基本类型

- number: 数字
- string: 字符串
- boolean: 布尔
- 数组
- object：对象
- null 和 undefined

null和undefined 是所有其它类型的子类型，它们可以赋值给其它类型

通过添加`strictNullChecks: true` 可以获得更严格的空类型检查，null和undefined只能赋值
给自身。



示例：约定，nums是数组，并且数组的每一项是number类型。三种不同的写法，意思都一样。
```
let nums: number[] = [3, 4, 5];
let nums1= [3, 4, 5]; 
let nums2: Array<number> = [3, 4, 5];
```



## 其它类型

- 联合类型： 多种类型任选其一

配合类型保护


- void类型： 通常用于约束函数的返回值，表示该函数没有任何返回, 一般不约束变量

- never类型： 通常用于约束函数的返回值，表示该函数永远不可能结束

- 字面量类型： 使用一个值进行约束

- 元祖类型（Tuple）: 一个固定长度的数组，并且数组中每一项的类型确定

- any类型： 可以绕过类型检查，因此any类型可以赋值给任意类型


**any 类型的隐患**
```
let data:any = "sfsdf";
let num:number = data;
```


**字面量约束**
```
let gender: "男" | "女"
gender = "男"


let a: "A";
a = "A";
```

`any`，`Object`，和`{}`

>你可能会试图使用`Object`或`{}`来表示一个值可以具有任意属性，因为`Object`是最通用的类型。 然而在这种情况下**any是真正想要使用的类型**，因为它是最_灵活_的类型。<br>  
比如，有一个`Object`类型的东西，你将不能够在其上调用`toLowerCase()`。
越普通意味着更少的利用类型，但是any比较特殊，它是最普通的类型但是允许你在上面做任何事情。 也就是说你可以在上面调用，构造它，访问它的属性等等。 记住，当你使用any时，你会失去大多数TypeScript提供的错误检查和编译器支持。<br>  
如果你还是决定使用Object和{}，你应该选择{}。 虽说它们基本一样，但是从技术角度上来讲{}在一些深奥的情况里比Object更普通。


## 类型别名

对已知的一些类型定义名称

```
type 类型名 = ...
```


举个栗子：
定义一个 用户的类型， 因为用户这个类型有可能很多地方都会用到，所以单独定义出来，方便后面使用。

```
type User = {
    name: string
    age: number
    gender: "男"|"女"
}

let u:User

function getUsers():User[] {
    return [];
}

// getUser返回值为一个数组类型，并且每一项为 User;

```


- ? 表示可选参数
```
function sum(a: number, b: number, c?: number) {

}
sum(3, 4)
```

- 默认参数
```
function sum(a: number, b: number, c: number = 5) {
    return a + b + c;
}
sum(3, 4)
```
默认参数，一定是可选参数。只不过我们给它赋了默认值。
可选参数必须在参数列表的末尾。
TS是一个静态的可选的类型系统。



## 扩展类型
- 枚举
> 扩展类型：类型别名、枚举、接口、类

枚举通常用于约束某个变量的取值范围。
字面量和联合类型配合使用，也可以达到同样的目标。

## 字面量类型的问题

- 在类型约束位置，会产生重复代码。可以使用类型别名解决该问题。
- 逻辑含义和真实的值产生了混淆，会导致当修改真实值得时候，产生大量的修改。
- 字面量类型不会进入到编译结果。


## 位枚举（扩展）




## TS模块化

#### 如何在TS中书写commonjs模块化代码

导出：export = xxx

导入：import xxx = require("xxx")  

```
import fs = require("fs")

import * as fs from 'fs'
```



> 扩展类型： 类型别名、枚举、接口、类

## TypeScript的接口： 用于约束类、对象、函数的契约（标准）


和类型别名一样， 接口不出现在编译结果中

1. 接口约束对象

2. 接口约束函数
    > 举个栗子
    ```
    interface Condition {
        (n: number): boolean
    }
    ```

**接口可以继承**

可以通过接口之间的继承，实现多种接口的组合
```
// 接口的继承  interface
interface A {
    T1: string
}

interface B extends A {
    T2: number
}

let u:B = {
    T2: 33,
    T1: 'sss'
}
```

使用类型别名可以实现类似的组合效果， 需要通过`&`, 它叫做交叉类型
```
// type 类型别名能不能实现 interface 继承的功能 ？
type X = {
    T1:string
}
type Y = {
    T2:number
}
type Z = {
    T3:boolean
} & X & Y

let h: Z = {
    T2: 33,
    T1: "asd",
    T3: true
}
```


它们的区别：
- 子接口不能覆盖父接口的成员
- 交叉类型会把相同成员的类型进行交叉
```
// 当使用交叉时， T1会获得字符串和number的共同方法。
type X = {
    T1:string
}
type Y = {
    T2:number
}
type Z = {
    T1: number
    T3:boolean
} & X & Y

let h: Z = {
    T2: 33,
    T1: "asd",
    T3: true
}
```

### readonly
```
let arr: readonly number[] = [3, 4, 6];
arr.push  // 你会发现arr没有了push,这些方法。 
arr = [4, 5, 6, 7];

// 限制该数组为只读数组，不能进行改变。 但不影响编译后的结果。 编译后的： let arr = [3, 4, 6];
```



## 类型兼容性

B->A, 如果能完成赋值， 则B和A类型兼容


- 基本类型：完全匹配
- 对象类型：鸭子辨型法





类型断言

```
interface Duck {
    sound: "嘎嘎嘎"
    swin(): void
}

let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎" as "嘎嘎嘎",  //类型断言   为什么会这样，因为这里是一个字面量是在赋值，不是在类型约束
    swin() {
        console.log(this.name + `正在游泳，并发出了  ${this.sound}  的声音`)
    }
}

let duck: Duck = person;

let aa: Duck = {
    sound: "嘎嘎嘎",
    swin(){
        
    }
}

let bb = {
    sound: "嘎嘎嘎",
    swin(){
        
    }
}

let cc: Duck = bb;  // 更严格的类型检查，sound被认为是一个字符串。
```




```
// ? 该属性可以有，可以没有，可选参数
interface User {
    name?: string
    age: number
}
```

- 函数类型