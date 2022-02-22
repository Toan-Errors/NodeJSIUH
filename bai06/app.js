const express = require('express');
const app = express();

// Viết mã lệnh để tạo web server cho các yêu cầu (req) tại cổng 8080 và trả về đáp ứng (res) là
// nội dung của một trang web khác. Khi nạp file mã lệnh vào Node.js và đệ trình yêu cầu trên
// trình duyệt. 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(8080);