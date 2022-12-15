window.onload = () => {
  standardColors();
  colorPaleteBlack.className = 'selected'
//   restoreSavedColor();
}

/* VARIÁVEIS */
const colorPalete = document.getElementsByClassName('color');
const colorButton = document.getElementById('button-random-color');
const colorPaleteBlack = document.getElementById('black');
colorPaleteBlack.style.backgroundColor = 'black';
const colors = ['black', 'red', 'green', 'purple'];
let lastColorPalette = {}
let colorPalette = [];
let selectedColor = 'rgb(0 , 0 , 0)';

/* Cores padrão */
function standardColors() {
    for (let index = 0; index < colorPalete.length; index += 1) {
      let fillPalete = ''
      for (let pickColor = 0; pickColor <= colors.length; pickColor += 1) {
        fillPalete = colors[index];
        // if (fillPalete === 'black') {
        //     colorPaleteBlack.className = 'selected';
        //     colorPaleteBlack.style.blackgroundColor = 'black'
        // }
      }
    colorPalete[index].style.backgroundColor = fillPalete; 
    }
}

/* Cor aleatória */
function colorRandom(){
    for (let index = 1; index < colorPalete.length; index++) {
    colorPalete[index].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
    colorPalette.push(colorPalete[index].style.backgroundColor);
    }
}
colorButton.addEventListener('click', colorRandom);

function saveColors() {
    for (let index = 0; index < colorPalette.length; index++) {
        lastColorPalette[colorPalette + [index]] = colorPalette[index];      
    }
}
saveColors();

/* Matriz */
const createCollum = (cells) => {
    const grid = document.getElementById('pixel-board');
    const ul = document.createElement('ul');
    ul.style.display = 'block'
    grid.appendChild(ul);
        for (let index = 0; index < cells; index += 1) {
            const pixel = document.createElement('li');
            pixel.className = 'pixel';
            pixel.style.listStyle = 'none'
            pixel.style.width = '40px'
            pixel.style.height = '40px'
            grid.style.textAlign = 'center'
            grid.style.margin = 'auto'
            grid.style.padding = '30px'
            ul.appendChild(pixel);
            grid.style.height = `${(parseInt(pixel.style.height) * cells) + (cells * 2) }px`
            grid.style.width = `${(parseInt(pixel.style.height) * cells) + (cells * 2)}px`
            console.log(parseInt(pixel.style.height) * cells);
        }
    
}

function createLines(cells) {
    for (let index = 0; index < cells; index += 1) {
        createCollum(cells);
        
    }
}

createLines(5);
