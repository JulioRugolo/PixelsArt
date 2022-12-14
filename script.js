window.onload = () => {
    
}

const colorPalete = document.getElementsByClassName('color');
const colorButton = document.getElementById('button-random-color');
const colorPaleteBlack = document.getElementsByClassName('color')[0];
colorPaleteBlack.style.backgroundColor = 'black'
let randomColor1 = Math.round(Math.random() * 255)
let randomColor2 = Math.round(Math.random() * 255)
let randomColor3 = Math.round(Math.random() * 255)


// function generateColorPalete() {
//     for (let index = 0; index < colorPalete.length; index++) {
//         colorPalete[index].style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
//     }    
// }



function colorRandom(){
    for (let index = 1; index < colorPalete.length; index++) {
    colorPalete[index].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
        localStorage.setItem('color', colorPalete[index])
    }
}
colorButton.addEventListener('click', colorRandom)
