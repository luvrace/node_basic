const dep1 = require('./dep1'); // dep1과 순환참조가 되기때문에 노드에서 강제로 빈 객체로 만들어버림 
console.log('require dep1',dep1);

module.exports = () => {
    console.log('dep1',dep1);
}