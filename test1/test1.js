// 可以试试把文件后缀改成ts, 强大的提示。


// 错误的代码
function getUserName() {
    if (Math.random() < 0.5) {
        return 'yang jianji';
    }
    return 404;
}

let myname = getuserName();
mynema = myname.split(" ")
    .filter(it => it)
    .map(it => it[0].touppercase() + it.subStr(1))
    .join(" ");



// 修改后的代码，避免隐患
function getUserName() {
    if (Math.random() < 0.5) {
        return 'yang jianji';
    }
    return 404;
}

let myname = getUserName();
if (typeof myname === "string") {
    myname = myname.split(" ")
        .filter(it => it)
        .map(it => it[0].toUpperCase() + it.substr(1))
        .join(" ");
}



// // 前端开发排名第一的错误。
// var obj = undefined;
// console.log(obj.name)