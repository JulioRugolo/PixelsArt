const matriz = document.querySelector('#pixel-board');
for(let index = 0; index < cells; index += 1){
  const line = document.createElement('div');
  line.className = 'line';
  for(let index1 = 0; index1 < cells; index1 += 1){
    const cell = document.createElement('div');
    cell.className = 'pixel';
    cell.style.backgroundColor = 'white'
    cell.style.height = '40px'
    cell.style.height = '40px'
    line.appendChild(cell);
  }
  matriz.appendChild(line);
}