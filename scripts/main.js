class Employee {
    constructor(element, game) {
        this.game = game;
        this.element = element;
        this.element.addEventListener('click', () => {
            this.click();
        });
        setInterval(() => {
            this.game.addToScore(10);
        }, 5000);
    }
    
    click() {
        this.game.addToScore(1);
        this.game.playAudio('employeeClick');
    }
    
}

class EmployeeClicker {
    constructor() {
        this.score = 0;
        this.init();
    }

    init() {
        const employeeDiv = document.getElementsByClassName('employee')[0]
        new Employee(employeeDiv, this);
        this.monitor = document.getElementsByClassName('monitor')[0];
        this.pc = document.getElementsByClassName('pc')[0];
        this.coffee = document.getElementsByClassName('coffee')[0];
        this.scoreContainer = document.getElementsByClassName('score')[0];
        this.updateScore();
    }
    
    addToScore(points) {
        this.score += points;
        this.updateScore();
    }

    updateScore() {
        this.scoreContainer.innerText = this.score;
    }

    playAudio(name) {
        const audioTag = `<audio autoplay src='assets/${name}.mp3'></audio>`;
        const div=  document.createElement('div');
        div.innerHTML = audioTag;
        document.getElementById('singleAudio').appendChild(div);
        setTimeout(()=> {
            document.getElementById('singleAudio').removeChild(div);
        }, 1000)
    }
}

new EmployeeClicker();