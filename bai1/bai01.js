// Lấy dữ liệu từ thẻ dựa vào id

const number = document.querySelector('#number');
const btn = document.querySelector('#btn');

let result = document.querySelector('#result');

// tạo ra 1 biến để lưu dữ liệu

const PrintNumber = (numberValue) => {
    let resultValue = '';
    for (let i = 0; i < numberValue; i++) {
        resultValue += `<div class="box">${i}</div>`;
    }
    return resultValue;
}

btn.addEventListener('click', () => {
    let numberValue = number.value
    result.innerHTML = PrintNumber(numberValue);
});

