class Games {
    constructor(player, computer) {
        this.player = player
        this.computer = computer
        this.gameEnd = false;
    }

    setGameEnd(gameEnd) {
        this.gameEnd = gameEnd;
    }

    isGameEnd() {
        return this.gameEnd;
    }

    gameResult() {
        var playerSelection = this.player.getChoice();
        console.log(playerSelection)
        var computerSelection = this.computer.getChoice();
        console.log(computerSelection)
        if ((playerSelection == "batu_player") && (computerSelection == "gunting_computer")) {
            return "Player won!";
        } else if ((playerSelection == "kertas_player") && (computerSelection == "batu_computer")) {
            return "Player won!";
        } else if ((playerSelection == "gunting_player") && (computerSelection == "kertas_computer")) {
            return "Player won!";
        } else if ((playerSelection == "kertas_player") && (computerSelection == "gunting_computer")) {
            return "Computer won!";
        } else if ((playerSelection == "gunting_player") && (computerSelection == "batu_computer")) {
            return "Computer won!";
        } else if ((playerSelection == "batu_player") && (computerSelection == "kertas_computer")) {
            return "Computer won!";
        } else if ((playerSelection == "batu_player") && (computerSelection == "batu_computer")) {
            return "Draw!";
        } else if ((playerSelection == "kertas_player") && (computerSelection == "kertas_computer")) {
            return "Draw!";
        } else if ((playerSelection == "gunting_player") && (computerSelection == "gunting_computer")) {
            return "Draw!";
        } else {
            return "error";
        }

    }
}

class Human {
    constructor() {

    }
    setChoice(playerClick) {
        this.choice = playerClick;
    }
    getChoice() {
        return this.choice;
    }
}

class Computer {
    constructor() {

    }
    getChoice() {
        return this.getRandomChoice();
    }
    getRandomChoice() {
        let arr = [1, 2, 3];
        let random = arr[Math.floor(Math.random() * arr.length)];
        let value;
        switch (random) {
            case 1:
                value = 'batu_computer';
                break;
            case 2:
                value = 'kertas_computer';
                break;
            default:
                value = 'gunting_computer';
        }
        return value;
    }
}


const userChoice = document.querySelectorAll(".user")
let human = new Human();
let computer = new Computer();
let games = new Games(human, computer);

userChoice.forEach((item) => {
    item.addEventListener('click', () => {
        const selectedByUser = item.id
        const domUser = document.getElementById(selectedByUser)
        domUser.style.backgroundColor = '#FDF5E6'
        human.setChoice(selectedByUser);
        if (!games.isGameEnd()) {
            let result = games.gameResult();
            if (result === 'Player won!') {
                document.getElementById("vs").innerHTML = "User Win";
            } else if (result === 'Computer won!') {
                document.getElementById("vs").innerHTML = "Computer Win";
            } else if (result === 'Draw!') {
                document.getElementById("vs").innerHTML = "Draw";
            }
            games.setGameEnd(true);
        }
    })
})


document.getElementById('refresh').addEventListener('click', function(e) {
    location.reload(true);
});