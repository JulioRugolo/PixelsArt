window.onload = () => {
  standardColors();
}

const colorPalete = document.getElementsByClassName('color');
const colorButton = document.getElementById('button-random-color');
const colorPaleteBlack = document.getElementsByClassName('color')[0];
colorPaleteBlack.style.backgroundColor = 'black';
const colors = ['black', 'red', 'green', 'purple'];

function standardColors() {
    for (let index = 0; index < colorPalete.length; index += 1) {
      let fillPalete = ''
      for (let pickColor = 0; pickColor <= colors.length; pickColor += 1) {
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
colorButton.addEventListener('click', colorRandom);

const createMatriz = () => {
    const matriz = document.querySelector('#pixel-board');
    for(let index = 0; index < 5; index += 1){
      const line = document.createElement('section');
      line.className = 'line';
      for(let index1 = 0; index1 < 5; index1 += 1){
        const cell = document.createElement('div');
        cell.className = 'pixel';
        cell.style.backgroundColor = 'white'
        cell.style.height = '40px'
        cell.style.height = '40px'
        line.appendChild(cell);
      }
      matriz.appendChild(line);
    }
  }
  createMatriz();

