window.onload = () => {
    standardColors();
        
}
const colorPalete = document.getElementsByClassName('color');
const colorButton = document.getElementById('button-random-color');
const colorPaleteBlack = document.getElementsByClassName('color')[0];
colorPaleteBlack.style.backgroundColor = 'black'
const colors = ['black', 'red', 'green', 'purple']

function standardColors(){
    for (let index = 0; index < colorPalete.length; index++) {
        let fillPalete = ''
        for (let pickColor = 0; pickColor <= colors.length; pickColor++) {
            fillPalete = colors[index];
        }
    colorPalete[index].style.backgroundColor = fillPalete; 
    }
}

function colorRandom(){
    for (let index = 1; index < colorPalete.length; index++) {
    colorPalete[index].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
    }
}
colorButton.addEventListener('click', colorRandom)