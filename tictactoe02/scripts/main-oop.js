class TicTacToeGame {
    constructor() {
        this.turn = document.getElementById("turn")
        this.boxes = document.querySelectorAll("#main div")
        this.X_or_O = 0;
        this.winningCombinations = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
    }

    selectWinnerBoxes(winnerBoxes) {
        winnerBoxes.forEach((box) => {
            box.classList.add("win")
        })
    
        turn.innerHTML = winnerBoxes[0].innerHTML + " is a winner";
        turn.style.fontSize = "40px"
    }

    getWinner() {
        for(const combination of this.winningCombinations) {
            const [a,b,c] = combination;
            const boxA = this.boxes[a], boxB = this.boxes[b], boxC = this.boxes[c];
            if(boxA.innerHTML !== "" && boxA.innerHTML === boxB.innerHTML &&
                boxA.innerHTML === boxC.innerHTML) {
                    this.selectWinnerBoxes([boxA, boxB, boxC]);
                    return boxA.innerHTML;
                }
        }
        return null;
    }

    handleBoxClick(box) {
        if(this.getWinner()){
            return;
        }
        
        if(box.innerHTML !== "X" && box.innerHTML !== "O") {
            const currentPlayer = this.X_or_O % 2 === 0 ? "X" : "O";
            box.innerHTML = currentPlayer;
    
            this.turn.innerHTML = (currentPlayer === "X" ? "O" : "X") + " Turn Now";
            this.X_or_O += 1;
        }
    
        const winner = this.getWinner();
        if(winner) {
            this.X_or_O = 0;
            return;
        }
    }

    replay() {
        this.boxes.forEach((box) => {
            box.classList.remove("win")
            box.innerHTML = "";
        })
        this.turn.innerHTML = "Play"
        this.turn.style.fontSize = "25px"
        this.X_or_O = 0
    }

    init() {
        this.boxes.forEach((box) => {
            box.addEventListener("click", () => this.handleBoxClick(box))
        })

        document.getElementById("replay").addEventListener("click", () => this.replay())

    }
}

const game = new TicTacToeGame()
game.init()
