const readline = require('readline');

let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let currentplayer = 'X'; // der Spieler X startet

printField();

function printField() {
    for (let row = 0; row < field.length; row++) {
        let selectedrow = field[row];
    let output = "";
    
        for (let col = 0; col < selectedrow.length; col++) {
            let sign = " ";
            if (selectedrow[col] == 1) {
                sign = "X";
            } else if (selectedrow[col]==2) {
                sign = "0";
            }

            output += sign + " | ";
        }
        console.log(output);
    }
}


function play(row, col) {
    if (field[row][col] === 0) {
        field[row][col] = currentplayer === 'X' ? 'O' : 'X';
        printField();
        checkWin();
        changePlayer();
    } else {
        console.log('Dieser Zug giltet nicht!')
    }
}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]], // horizontale Reihen
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]], // vertikale Reihen
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]], // diagonale Reihen
        [[0, 2], [1, 1], [2, 0]]
      ];

      for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        const [a, b, c] = combination;
    
        if (
          field[a[0]][a[1]] === field[b[0]][b[1]] &&
          field[b[0]][b[1]] === field[c[0]][c[1]] &&
          field[a[0]][a[1]] !== 0
        ) {
          console.log('Spieler ' + currentPlayer + ' hat gewonnen!');
          process.exit(0);
        }
      }
    
      // Überprüfen auf Unentschieden
      if (isBoardFull()) {
        console.log('Unentschieden!');
        process.exit(0);
      }
    }
    
    // Funktion, um zu überprüfen, ob das Spielbrett voll ist
    function isBoardFull() {
        for (let row = 0; row < field.length; row++) {
          for (let col = 0; col < field[row].length; col++) {
            if (field[row][col] === 0) {
              return false;
            }
          }
        }
        return true;
      }
      
      // Funktion, um den Benutzereingabe zu verarbeiten
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      function processUserInput(input) {
        const [row, col] = input.trim().split(' ');
        play(row - 1, col - 1);
        rl.close();
      }
      
      rl.question('Gib deinen Zug ein Spieler ' + currentplayer + '(Reihe Spalte): ', processUserInput);
