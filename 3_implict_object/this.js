console.log(this); //global? NO 전역 스코프의 this는 빈 객체이다.
console.log(this === module.exports);

function a(){
    console.log(this === global);
}

a();

