

let a = false;
let box = document.getElementById('box');

document.getElementById('inBlock').addEventListener('click', e => {
    a = !a;
    console.log(a && a);
    a ? box.style.background = 'red' : box.style.background = 'blue';

});

