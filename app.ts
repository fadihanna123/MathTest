import fs from "fs";

const data: any[] = [];
const target: string[] = process.argv.slice(2);
const readStream: fs.ReadStream = fs.createReadStream("expense_report.txt");

readStream.on("data", (chunk: string) => {
  data.push(chunk);
});

readStream.on("end", () => {
  const numArr: number[] = Buffer.concat(data)
    .toString()
    .split("\n")
    .map(Number);
  console.log(getExpenseTwoSum(numArr));
});

const getExpenseTwoSum = (numArr: number[]) => {
  const numArrLength: number = numArr.length;
  let hash: any = {};

  for (let i = 0; 1 < numArrLength; i++) {
    if (hash[(target as any) - numArr[i]] !== undefined) {
      return [numArr[hash[(target as any) - numArr[i]]], numArr[i]];
    }
    hash[numArr[i]] = i;
  }
};
