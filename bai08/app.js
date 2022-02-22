const express = require('express');
const app = express();

// Viết mã lệnh để tạo web server cho các yêu cầu (req) tại cổng 8080 và trả về đáp ứng (res) là
// nội dung của một trang web tùy vào tham số của yêu cầu (req), tham số là tên trang web.
// Khởi nạp file mã lệnh vào Node.js và đệ trình yêu cầu trên trình duyệt

app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.send(`<h1>${page}</h1>`);
});

app.listen(8080);