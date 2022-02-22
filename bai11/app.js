const express = require('express');
const app = express();

// Viết mã lệnh tạo restful cho phương thức get để chuyển đổi ngoại tệ.

app.get('/:currency/:amount', (req, res) => {
    const currency = req.params.currency;
    const amount = req.params.amount;
    const rate = {
        'usd': 22807,
        'eur': 25879,
        'jpy': 198
    };
    const result = amount * rate[currency];
    res.send(`${amount} ${currency} là ${result} VND`);
});


app.listen(8080);