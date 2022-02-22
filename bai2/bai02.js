const number = document.querySelector('#number');
const btn = document.querySelector('#btn');
let result = document.querySelector('#result');


const kiem_tra_snt = (numberValue) => {
    if(numberValue < 2)
        return false;

    if(numberValue === 2)
        return true;

    if(numberValue % 2 === 0)
        return false;

    for(var i = 3; i < Math.sqrt(numberValue); i+=2){
        if(numberValue % i === 0){
            return false;
        }
    }

    return true;
}

btn.addEventListener('click' ,() => {
    let numberValue = number.value;
    let resultValue = '';
    for(let i = 0; i < numberValue; i++){
        if(kiem_tra_snt(i)){
            resultValue += `<div class="box">${i}</div>`;
        }
    }
    result.innerHTML = resultValue;
});