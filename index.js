const Gameboard = (function() {
    const board = ['', '', '', '', '', '', '', '', '']

    function getBoard () {
        return board;
    }

    function setCell (index, mark) {
        if (!board[index]) {
            board[index] = mark
        }
    }

    return {
        getBoard,
        setCell
    }
})()

const Player = (name, marker) => {
    return { name, marker }
}

const player1 = Player('Mouaz', 'X')
const player2 = Player('Tamer', 'O')