var express = require('express')
var app = express()
require('dotenv').config(); //따로 객체로 전달받을 필요 없이 config() 메소드만 실행
var port = process.env.PORT || 3000;    //.env 파일의 PORT 변수를 먼저 참조하고, 없으면 3000을 참조한다.
//그런데 그냥 이렇게만 쓰면 인식을 못하고, 라이브러리가 필요하다 => dot-env
//process.env.PORT 라는 변수

//http 라이브러리와 형식 동일
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});

//어떠어떠한 url로 요청이 들어왔을 때 어떠한 반응을 보일지 설정할 수 있다.
//만약 localhost:8080/a 로 요청한다면, localhost:8080은 listen 단에서 이미 완료.
//나머지 url만 입력하면 된다.
//이때, get, post와 같은 routing(중개) 방식이 사용된다.
 
//app.get(요청한 경로, 콜백함수(클라이언트로부터 온 요청, 서버의 반응, ???) { . . . })
app.get('/a', (request, response, next) => {
    response.send("<img src='./horse.jpg' alt='경로에 문제가 있음'/>");
});