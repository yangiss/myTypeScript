class User {
    constructor(name, age) {
        this.name = name;
        this.gender = "男";
        this._publishNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
        this.oAge = age;
    }
    publish(title) {
        if (this._curNumber < this._publishNumber) {
            console.log("发布一篇文章：" + title);
            this._curNumber++;
        }
        else {
            console.log("你今日发布的文章数量已达到上线！");
        }
    }
    set age(value) {
        if (value < 0) {
            this.oAge = 0;
        }
        else {
            this.oAge = value;
        }
    }
    get age() {
        return Math.floor(this.oAge);
    }
}
const u = new User("aa", 2);
u.publish("ddd");
u.publish("ddd");
u.publish("ddd");
u.publish("ddd");
u.oAge = -2;
console.log(u.oAge);
