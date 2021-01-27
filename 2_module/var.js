const odd = '홀수입니다';
const even = '짝수입니다';

// module.exports = {
//     odd: odd,
//     even: even,
// };

//최신문법으로 객체 대입

//module.exports = [odd, even];


module.exports = {
    odd,
    even,
};
 

const checkOddEven = require('./func');
