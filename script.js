window.onload = () => {
  standardColors()
  colorPaleteBlack.className += ' selected';
};

/* VARIÁVEIS */
const colorPalete = document.getElementsByClassName('color');
const colorButton = document.getElementById('button-random-color');
const colorPaleteBlack = document.getElementById('black');
colorPaleteBlack.style.backgroundColor = 'black';
const colors = ['black', 'red', 'green', 'purple'];
const lastColorPalette = {};
let colorPalette = [];
let selectedColor = 'rgb(0 , 0 , 0)';

/* Cores padrão */
function standardColors() {
  for (let index = 0; index < colorPalete.length; index += 1) {
    let fillPalete = '';
    for (let pickColor = 0; pickColor <= colors.length; pickColor += 1) {
      fillPalete = colors[index];
    }
    colorPalete[index].style.backgroundColor = fillPalete;
  }
}
standardColors();

/* Cor aleatória */
function colorRandom() {
  for (let index = 1; index < colorPalete.length; index += 1) {
    colorPalete[index].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
    colorPalette.push(colorPalete[index].style.backgroundColor);
  }
}
colorButton.addEventListener('click', colorRandom);

function saveColors() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    lastColorPalette[colorPalette + [index]] = colorPalette[index];
  }
}
saveColors();

/* Matriz */
const div = document.createElement('div');
div.id = 'pixel-board';
matriz.appendChild(div);
const createCollum = (cells) => {
  const ul = document.createElement('ul');
  ul.style.display = 'block';
  div.appendChild(ul);
  for (let index = 0; index < cells; index += 1) {
    const pixel = document.createElement('li');
    pixel.className = 'pixel';
    pixel.style.listStyle = 'none';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    div.style.textAlign = 'center';
    div.style.margin = 'auto';
    div.style.padding = '30px';
    ul.appendChild(pixel);
    div.style.height = `${(parseInt(pixel.style.height) * cells) + (cells * 2)}px`;
    div.style.width = `${(parseInt(pixel.style.height) * cells) + (cells * 2)}px`;
  }
};

function createLines(cells) {
  for (let index = 0; index < cells; index += 1) {
    createCollum(cells);
  }
}
createLines(5);

/* SELECT COLOR */
function removeAllClass() {
  for (let index = 0; index < colorPalete.length; index += 1) {
    colorPalete[index].classList.remove('selected');
  }
}

const colorSelect = (event) => {
  let colorSelected = document.querySelector('.color');
  if (event.target.className === 'color') {
    removeAllClass();
    event.target.classList.add('selected');
    selectedColor= event.target.style.backgroundColor;
  }
};

for (let index = 0; index < colorPalete.length; index += 1) {
    colorPalete[index].addEventListener('click', colorSelect);
}

/* PAINT GRID */
const paintPixel = document.getElementsByClassName('pixel');
for (let index = 0; index < paintPixel.length; index++) {
  paintPixel[index].addEventListener('click', (event) =>{
    event.target.style.backgroundColor = selectedColor;
  });
}

/* CLEAR BOARD */
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', (event) => {
  for (let index = 0; index < paintPixel.length; index++) {
    paintPixel[index].style.backgroundColor = 'white';   
  }
});
