const express = require('express');
const app = express();

// Viết mã lệnh để tạo web server cho các yêu cầu (req) tại cổng 8080 và trả về đáp ứng (res) là
// phần url sau tên miền của yêu cầu (req). Khởi nạp file mã lệnh vào Node.js và đệ trình yêu
// cầu trên trình duyệt.

app.get('/', (req, res) => {
    res.send(`${req.hostname}`);
});

app.listen(8080);