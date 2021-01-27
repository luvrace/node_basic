//구조분해 할 땐 속성명 변수명 매칭되어야함.
const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddEven(str){
    if(str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(5));
console.log(checkStringOddEven("안녕하세요"));
