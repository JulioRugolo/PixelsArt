
window.onload = () => {
    loadBoardSize();
    createLines(numberOfPixels);
  };
  
  /* VARIÁVEIS */
  const colorPalete = document.getElementsByClassName('color');
  const colorButton = document.getElementById('button-random-color');
  const colorPaleteBlack = document.getElementById('black');
  colorPaleteBlack.style.backgroundColor = 'black';
  colorPaleteBlack.className += ' selected';
  let colors = ['black', 'red', 'green', 'purple'];
  const lastrandomColor = [];
  const div = document.createElement('div');
  const matriz = document.getElementById('matriz');
  const paintPixel = document.getElementsByClassName('pixel');
  const retrieve = JSON.parse(localStorage.getItem('colorPalette'));
  const rgb = () => Math.round(Math.random() * 255);
  let selectedColor = 'rgb(0 , 0 , 0)';
  let numberOfPixels = 5;
  let localBoardSize = parseInt(localStorage.getItem('boardSize'));
  let retrieveArrayLocalStorage = JSON.parse(localStorage.getItem('randomColor'));
  
  
  /* Cores padrão */
  function retrieveColors() {
    for (let indexLocal = 0; indexLocal < retrieve.length; indexLocal += 1) {
      if (localStorage !== null && localStorage.key(indexLocal) === 'colorPalette') { 
        colors = ['black'];
        for (let index = 0; index < colorPalete.length; index += 1){
          colors.push(retrieve[index]);
        }
      }
    }
  }
  retrieveColors();
  
  function standardColors() {
    for (let index = 0; index < colorPalete.length; index += 1) {
      colorPalete[index].style.backgroundColor = colors[index];
    }
    retrieveColors();
  }
  standardColors();
  
  /* Cor aleatória */
  function colorRandom() {
    let randomColor = [];
    for (let index = 1; index < colorPalete.length; index += 1) {
      colorPalete[index].style.backgroundColor = `rgb(${rgb()}, ${rgb()}, ${rgb()}`;
      randomColor.push(colorPalete[index].style.backgroundColor);
      localStorage.setItem('colorPalette', JSON.stringify(randomColor));
    }
  }
  colorButton.addEventListener('click', colorRandom);
  
  /* Matriz */
  
  /* ------ CRIA A MATRIZ ------- */
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
      div.style.height = `${(parseInt(pixel.style.height, 10) * cells) + (cells * 2)}px`;
      div.style.width = `${(parseInt(pixel.style.height, 10) * cells) + (cells * 2)}px`;
      paint()
    }
  };
  
  function createLines(cells) {
    for (let index = 0; index < cells; index += 1) {
      createCollum(cells);
    }
  }
  
  
  /* ------ REMOVE MATRIZ ------- */
  const removePixels = () => {
    const pixelBoardUl = document.getElementsByTagName('ul');
    const pixelRemove = document.getElementsByClassName('pixel');
    while (pixelRemove.length > 0) {
      for (let index = 0; index < pixelBoardUl.length; index += 1) {
        pixelBoardUl[index].remove()
      }
    }
  }
  
  
  /* SELECT COLOR */
  function removeAllClass() {
    for (let index = 0; index < colorPalete.length; index += 1) {
      colorPalete[index].classList.remove('selected');
    }
  }
  
  const colorSelect = (event) => {
    if (event.target.className === 'color') {
      removeAllClass();
      event.target.classList.add('selected');
      return selectedColor = event.target.style.backgroundColor;
    }
  };
  
  for (let index = 0; index < colorPalete.length; index += 1) {
    colorPalete[index].addEventListener('click', colorSelect);
  }
  
  /* PAINT GRID */
  function paint() {
    for (let index = 0; index < paintPixel.length; index += 1) {
      paintPixel[index].addEventListener('click', (event) => {
        event.target.style.backgroundColor = selectedColor;
      });
    }
  }
  
  
  /* CLEAR BOARD */
  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', () => {
    for (let index = 0; index < paintPixel.length; index += 1) {
      paintPixel[index].style.backgroundColor = 'white';
    }
  });
  
  /* INPUT FUNCTION */
  let boardSize = document.getElementById('board-size');
  
  function inputValidate() {
    if (boardSize.value > 0) {
      numberOfPixels = boardSize.value;
      between5and50()
      removePixels();
      createLines(numberOfPixels);
      saveBoardSize();
    } else {
      alert('Board inválido!');
    }
  }
  
  function between5and50() {
    if (numberOfPixels < 5) {
      numberOfPixels = 5;
    }
    if (numberOfPixels > 50) {
      numberOfPixels = 50;
    }
  }
  /* BOTÃO GERAR NOVA PIXELBOARD */
  const botaoVQV = document.getElementById('generate-board');
  botaoVQV.addEventListener('click', (event) => {
    inputValidate()
    for (let index = 0; index < paintPixel.length; index += 1) {
      paintPixel[index].addEventListener('click', (event) => {
        event.target.style.backgroundColor = selectedColor;
      })
    };
  })
  
  /* LOCAL STORAGE */
  function saveBoardSize() {
    localStorage.setItem('boardSize', numberOfPixels)
  }
  
  function loadBoardSize() {
    if (localBoardSize == null) {
      numberOfPixels = 5;
    }
    if (localBoardSize > 0) {
      numberOfPixels = localBoardSize;
    }
  }
  
  
  