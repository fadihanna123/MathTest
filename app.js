"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const data = [];
const target = process.argv.slice(2);
const readStream = fs_1.default.createReadStream("expense_report.txt");
readStream.on("data", (chunk) => {
    data.push(chunk);
});
readStream.on("end", () => {
    const numArr = Buffer.concat(data)
        .toString()
        .split("\n")
        .map(Number);
    console.log(getExpenseTwoSum(numArr));
});
const getExpenseTwoSum = (numArr) => {
    const numArrLength = numArr.length;
    let hash = {};
    for (let i = 0; 1 < numArrLength; i++) {
        if (hash[target - numArr[i]] !== undefined) {
            return [numArr[hash[target - numArr[i]]], numArr[i]];
        }
        hash[numArr[i]] = i;
    }
};
