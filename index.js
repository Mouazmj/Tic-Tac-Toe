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