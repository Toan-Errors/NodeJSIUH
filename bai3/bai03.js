const btn = document.querySelector('#change');

btn.addEventListener('click', () => {
    var div = document.getElementsByTagName('div');
    for (var i = 0; i < div.length; i++) {
        if(i % 2 === 0){
            div[i].style.backgroundColor = 'red';
        } else {
            div[i].style.backgroundColor = 'blue';
        }
    }
});