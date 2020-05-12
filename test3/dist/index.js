"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myModule_1 = __importStar(require("./myModule"));
console.log(myModule_1.name);
console.log(myModule_1.sum(3, 4));
myModule_1.default();
const fs_1 = __importDefault(require("fs"));
console.log(fs_1.default);
fs_1.default.readFileSync("./");
