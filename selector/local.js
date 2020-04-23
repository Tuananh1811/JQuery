const express = require('express');
const app = express(); //app=new app
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Tuấn Anh đẹp trai<\h1>')); //
app.get('/', function(request, response) {
    response.send("Tuấn Anh-Hệ thống thông tin 1-HaUI");
})
app.get('/trang2', function(request, response) {
    response.send("Trang 2 không có gì");
})



// //app.listen(port, () => console.log(`http://localhost:${port}`));//(listen(port,callback))
app.listen(port, function() {
    console.log("http://localhost:" + port);
})