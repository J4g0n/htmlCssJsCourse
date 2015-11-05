var PLAYER1 = 0;
var PLAYER2 = 1;

var game = (function () {
    var nbTry = 0;
    var board = [
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined]
    ];

    return {
        getRow: function (index) {
            return [board[index][0], board[index][1], board[index][2]];
        },

        getColumn: function (index) {
            return [board[0][index], board[1][index], board[2][index]];
        },

        getDiagonaleDescendent: function () {
            return [board[0][0], board[1][1], board[2][2]];
        },

        getDiagonaleAscendent: function () {
            return [board[2][0], board[1][1], board[0][2]];
        },

        lineFilledWithSameSymbol: function (line) {
            return (line[0] === line[1]) && (line[1] === line[2]) && (line[1] === 'X' || line[1] === 'O');
        },

        gameIsWon: function () {
            var self = this;

            var lines = [
                this.getRow(0),
                this.getRow(1),
                this.getRow(2),
                this.getColumn(0),
                this.getColumn(1),
                this.getColumn(2),
                this.getDiagonaleAscendent(),
                this.getDiagonaleDescendent()
            ];

            return lines.reduce(function (acc, line) {
                return acc || self.lineFilledWithSameSymbol(line);
            }, false);
        },

        gameIsADraw: function () {
            return nbTry === 9 && !this.gameIsWon();
        },

        getCellValue: function (xValue, yValue) {
            return board[xValue][yValue];
        },

        setCellValue: function (value, xValue, yValue) {
            board[xValue][yValue] = value;
        },

        playTry: function (xValue, yValue) {
            this.setCellValue(this.getPlayerSymbol(), xValue, yValue);
            ++nbTry;
        },

        resetBoard: function () {
            nbTry = 0;
            board = [
                [undefined,undefined,undefined],
                [undefined,undefined,undefined],
                [undefined,undefined,undefined]
            ];
        },

        playerTurn: function () {
            return nbTry % 2;
        },
        
        getPlayerSymbol: function () {
            return this.playerTurn() === PLAYER1 ? 'O' : 'X';
        }
    };
})();


(function () {
    var boardNode = document.getElementById("board");
    var ticTacToeBoardNode = document.getElementById("tictactoe-board");
    var formNode = document.getElementById("form");
    var gameOverNode = document.getElementById("game-over");
    var playButton = document.getElementById("play");
    var player1 = document.getElementById("player1");
    var player1Name = document.getElementById("player1-name");
    var player1Score = document.getElementById("player1-score");
    var player2 = document.getElementById("player2");
    var player2Name = document.getElementById("player2-name");
    var player2Score = document.getElementById("player2-score");
    var winnerName = document.getElementById("winner-name");
    var continueButton = document.getElementById("continue-button");
    var endButton = document.getElementById("end-button");
    var boardCells = document.querySelectorAll("td");

    playButton.addEventListener("click", function (e) {
        player1Name.innerHTML = player1.value;
        player2Name.innerHTML = player2.value;
        Array.prototype.forEach.call(boardCells, function (cell) {
            cell.innerHTML = "_";
        });

        formNode.classList.add("hide");
        boardNode.classList.remove("hide");
    });

    ticTacToeBoardNode.addEventListener("click", function (e) {
        var target = e.target;
        var nodeContent = target.innerHTML;

        if (!(nodeContent === 'O') && !(nodeContent === 'X')) {
            var xVal = target.dataset.row;
            var yVal = target.dataset.col;

            game.playTry(xVal, yVal);
            target.innerHTML = game.getPlayerSymbol();
        }
        if (game.gameIsWon()) {
            winnerName.innerHTML = game.playerTurn() === PLAYER1 ? player2.value : player1.value;
            var winnerScoreNode = game.playerTurn() === PLAYER1 ? player2Score : player1Score;
            winnerScoreNode.innerHTML = (parseInt(winnerScoreNode.innerHTML) + 1).toString();

            boardNode.classList.add("hide");
            gameOverNode.classList.remove("hide");
        }
        if (game.gameIsADraw()) {
            winnerName.innerHTML = "Personne ne ";

            boardNode.classList.add("hide");
            gameOverNode.classList.remove("hide");
        }
    });

    continueButton.addEventListener("click", function (e) {
        game.resetBoard();
        Array.prototype.forEach.call(boardCells, function (cell) {
            cell.innerHTML = "_";
        });

        gameOverNode.classList.add("hide");
        boardNode.classList.remove("hide");
    });

    endButton.addEventListener("click", function () {
        game.resetBoard();
        player1.value = "";
        player2.value = "";
        player1Score.innerHTML = "0";
        player2Score.innerHTML = "0";

        Array.prototype.forEach.call(boardCells, function (cell) {
            cell.innerHTML = "_";
        });

        gameOverNode.classList.add("hide");
        formNode.classList.remove("hide");
    });
})();