document.getElementsByClassName('initial')[0].style.background = 'black';

const boardSize = document.getElementById('board-size');
const board = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const generateBoard = document.getElementById('generate-board');

function randomColor() {
  const colorR = Math.floor(Math.random() * 16777214).toString(16);
  const colorR2 = Math.floor(Math.random() * 16777214).toString(16);
  const colorR3 = Math.floor(Math.random() * 16777214).toString(16);

  document.querySelector('.a').style.background = `#${colorR}` ;
  document.querySelector('.b').style.background = `#${colorR2}`;
  document.querySelector('.c').style.background = `#${colorR3}`;
}
randomColor();

function canvas(n) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const square = document.createElement('span');
      square.className = 'pixel';
      board.appendChild(square);
    }
  }
  board.style.width = `${n * 42}px`;
}

canvas(5);

generateBoard.addEventListener('click', () => {
  board.innerHTML = '';
});

generateBoard.addEventListener('click', () => {
  if (boardSize.value == 0) {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    canvas(5);
  } else if (boardSize.value > 50) {
    canvas(50);
  } else {
    canvas(boardSize.value);
  }
});

colorPalette.addEventListener('click', () => {
  const checker = document.getElementById('color-palette').children;
  for (let i = 0; i < checker.length; i += 1) {
    if (checker[i].classList.contains('selected') === true) {
      checker[i].classList.remove('selected');
    }
  }
});

colorPalette.addEventListener('click', (event) => {
  if (event.target.classList.contains('selected') === true) {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
});

board.addEventListener('click', (event) => {
  event.target.style.background = document.getElementsByClassName('selected')[0].style.background;
});

document.getElementById('clear-board').addEventListener('click', () => {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.background = 'white';
  }
});
