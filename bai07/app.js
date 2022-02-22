const express = require('express');
const app = express();

// Viết mã lệnh để tạo web server cho các yêu cầu (req) tại cổng 8080 và hiển thị kết quả trong
// Terminal với nội dung gồm các phần: host, pathname, search.

app.get('/', (req, res) => {
    console.log(`Host: ${req.hostname}`);
    console.log(`Pathname: ${req.url}`);
    console.log(`Search: ${JSON.stringify(req.query)}`);
});

app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});