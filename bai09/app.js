const express = require('express');
const app = express();

// Viết mã lệnh phát sinh sự kiện khi mở file và hiển thị kết quả trong Terminal với nội dung là
// file được mở. 

app.get('/:path', (req, res) => {
    console.log(`File ${req.url} is opened`);
});

app.listen(8080);