const express = require('express');
const app = express();

// Viết mã lệnh để tạo web server cho các yêu cầu (req) tại cổng 8080 và trả về đáp ứng (res) có
// mã trạng thái 200 (status code: OK) và kiểu nội dung text/html (Content-Type: text/html).
// Khởi nạp file mã lệnh vào Node.js và đệ trình yêu cầu trên trình duyệt.



app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.status(200).send('<h1>Hello World!</h1>');
});

app.listen(8080);