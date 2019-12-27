/**
 * 리다이렉션 예제 (use 이용)
 */

var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();

//초기 세팅
//view templete은 여기서부터 탐색
app.set('views', path.join(__dirname, 'views'));
//views라는 폴더를 찾을 때에는, __dirname/views 에서 찾는다. __dirname은 자체 내장 변수. 현재 디렉토리를 알려준다.

//미들웨어 등록
//서버의 동작과는 관계없이 미들웨어 실행
app.use((req, res) => {
    console.log(`첫 번째 미들웨어에서 요청을 처리함`);
    res.redirect('http://www.google.com');  //리다이렉션
})

//console.log(path.join(__dirname, 'views'));
//console.log(`${__dirname}\\views`);


var port = process.env.PORT;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});