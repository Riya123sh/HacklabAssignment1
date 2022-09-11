const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');


function redLight(){
    red.classList.add('active')
    setTimeout(() => {
        red.classList.remove('active')
    }, 5000);
}
function yellowLight(){
    yellow.classList.add('active')
    setTimeout(() => {
        yellow.classList.remove('active')
    }, 15000);
}
function greenLight(){
    green.classList.add('active')
    setTimeout(() => {
        green.classList.remove('active')
    }, 20000);
}

setInterval(changeLights,40000)