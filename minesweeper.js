document.addEventListener('DOMContentLoaded', startGame)

var board = {
	cells: []
}
createBoard(6)

function createBoard(size) {
	for (rowNum = 0; rowNum < size; rowNum++) {
		for (colNum = 0; colNum < size; colNum++) {
			board.cells.push({
				row: rowNum,
				col: colNum,
				isMine: Math.random() < 0.2,
				isMarked: false,
				hidden: true
			})
		}
	}
	startGame
}

function startGame () {

for (var i = 0; i < board.cells.length; i++) {
       board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
      } 
      
      document.addEventListener("click", checkForWin)
      document.addEventListener("contextmenu", checkForWin)
    
      lib.initBoard();
    }


    function checkForWin () {

    for (var i = 0; i < board.cells.length; i++) {
      
      if (board.cells[i].isMine == true)
      
      if (board.cells[i].isMarked !== true) {
        return
      } else if (board.cells[i].isMarked == true) {
        board.cells[i].hidden == true
        return
      } else {
        board.cells[i].hidden !== true
         displayMessage('You win!')
      }
    }
 }
 


    function countSurroundingMines(cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var newSurround = 0;
    for (var i = 0; i < surrounding.length; i++) {
      if (surrounding[i].isMine === true) {
        newSurround++;
      }
    }
    return newSurround;
  }
  


