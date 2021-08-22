var board = document.querySelector('#board');
var tiles = document.querySelectorAll('#board .tile');
var player = document.querySelector('#player');
var winmsg = document.querySelector('[data-message-text]');
var winmsgelements = document.querySelector('#message');
var restart = document.querySelector('#restart');
var p1Wins = document.querySelector('#p1Wins');
var p2Wins = document.querySelector('#p2Wins');
const patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var countP1 = 0;
var countP2 = 0;
var turn;

p1Wins.innerHTML = 0;
p2Wins.innerHTML = 0;

game();

restart.addEventListener('click', game);

function game () {
  board.classList.remove('turn-x', 'turn-o');
  winmsgelements.classList.remove('show');
  p1Wins.innerHTML = countP1;
  p2Wins.innerHTML = countP2;

  for (var tile of tiles) {
    tile.classList.remove('x', 'o');
    tile.addEventListener('click', fillTile, { once: true });
  }

  turn = Math.round(Math.random(0,1)) === 1 ? 'x' : 'o';
  board.classList.add('turn-' + turn);
  player.innerHTML = "Player " + turn + "'s turn";
}

function fillTile () {
  this.classList.add(turn);
  
  if (checkWinner()) {
    winmsg.innerHTML = "Player " + turn + "'s the WINNER!!!";
    turn === 'x' ? countP1++ : countP2++;
    winmsgelements.classList.add('show');
    document.getElementById("next").style.display = "block";
    document.getElementById("tips").style.display = "none";
  }
  else if (checkDraw()) {
    winmsg.innerHTML = "It's Draw";
    winmsgelements.classList.add('show');
    document.getElementById("next").style.display = "none";
    document.getElementById("tips").style.display = "block";
  }
  else {
    turn = turn === 'x' ? 'o' : 'x';
    board.classList.remove('turn-o', 'turn-x');
    board.classList.add('turn-' + turn);
    player.innerHTML = "Player " + turn + "'s turn";
  }
}

function checkWinner () {
  return patterns.some(pattern => {
    return pattern.every(path => {
      if (tiles[path].classList.contains(turn)) {
        return true;
      }
      return false;
    });
  });
}

function checkDraw () {
  return [...tiles].every(path => {
    if (path.classList.contains('x') || path.classList.contains('o')) {
      return true;
    }
    return false;
  });
}