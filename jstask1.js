function revFunc(num) {
    let numStr = num.toString();
    let reversedStr = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    return parseInt(reversedStr);
}
  
let num = 987654321;
let revNum = revFunc(num);
  
console.log(revNum);