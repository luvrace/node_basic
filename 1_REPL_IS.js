//*자바스크립트는 REPL 콘솔을 제공한다. (READ EVALUATE PRINT LOOP)
//자바스크립트 코드를 JS파일에 쓰면 읽고 평가하고 출력하고 반복한다는 의미다.

function helloworld(){
    console.log('Hello World');
    helloNode();
}

function helloNode(){
    console.log('Hello Node');
}

helloworld();

//power shell를 실행기로 쓸 경우 에러가 발생할 확률이 높아진다 CMD를 사용하자.