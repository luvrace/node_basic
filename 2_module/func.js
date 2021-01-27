// const value = require('./var');
// console.log(value);

//최신문법으로 구조분해 가능한 방법
const {odd, even} = require('./var');

function checkOddEven(number){
    if(number%2==1){
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddEven;
