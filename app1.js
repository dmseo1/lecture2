var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
/**
 * 
 * 
 */


//http 라이브러리와 형식 동일
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});
