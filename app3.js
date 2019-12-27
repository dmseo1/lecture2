var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));

app.use((req, res) => {
    console.log("첫 번째 미들웨어 요청이 들어왔습니다.");
    var userAgent = req.header('User-Agent');   //클라이언트 요청의 헤더의 user-agent를 저장
    var paramName = req.query.name;     //get 쿼리의 "name" 에 해당하는 value 값을 저장            
    res.writeHead('200', {'Content-Type': 'text/html; charset=utf8'});
    res.write(`<html>
                <head></head>
                <body>
                <h1> Express 서버에서 응답한 결과입니다</h1>
                <div><p>User-Agent: ${userAgent} </p></div>
                <div><p>ParamName: ${paramName} </p></div>
                </body>
                </html>`);
});

var port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
});