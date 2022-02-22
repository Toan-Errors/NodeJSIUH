const express = require('express');
const app = express();

// Viết mã lệnh để tạo web server cho các yêu cầu (req) tại cổng 8080 và trả về đáp ứng (res) là
// ngày tháng năm của hệ thống. Khởi nạp file mã lệnh vào Node.js và đệ trình yêu cầu trên
// trình duyệt. Yêu cầu viết module trả về đối tượng ngày tháng năm (date) và thời gian (time)
// của hệ thống. 

app.get('/', (req, res) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    res.send(`${time}`);
});

app.listen(8080);