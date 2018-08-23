class Employee {
    constructor(element, game) {
        this.game = game;
        this.intervalTime = 5000;
        this.element = element;
        this.element.addEventListener('click', () => {
            this.click();
        });
        this.updateInterval();
    }
    
    click() {
        this.game.addToScore(1);
        this.game.playAudio('employeeClick');
    }
    
    work() {
        this.game.addToScore(10);
    }

    updateInterval() {
        if(this.intervalId) {
            clearInterval(this.intervalId);    
        }
        this.intervalId = setInterval(() => {
            this.work();
        }, this.intervalTime);
    }
}

class EmployeeClicker {
    constructor() {
        this.score = 0;
        this.scoreListeners = [];
        this.employees = [];
        this.init();
    }

    init() {
        const employeeDiv = document.getElementsByClassName('employee')[0]
        this.employees = [new Employee(employeeDiv, this)];
        this.monitor = document.getElementsByClassName('monitor')[0];
        this.pc = document.getElementsByClassName('pc')[0];
        this.coffee = document.getElementsByClassName('coffee')[0];
        this.scoreContainer = document.getElementsByClassName('score')[0];
        this.updateScore();
        this.initUpgrades();
    }

    initUpgrades() {
        const coffeeUpgrade = new CoffeeUpgrade(this);
    }

    addToScore(points) {
        this.score += points;
        this.updateScore();
    }

    addScoreListener(listener) {
        this.scoreListeners.push(listener);
    }

    updateScore() {
        this.scoreListeners.forEach(listener => listener(this.score));
        this.scoreContainer.innerText = this.score;
    }

    playAudio(name) {
        const audioTag = `<audio autoplay src='public/assets/${name}.mp3'></audio>`;
        const div=  document.createElement('div');
        div.innerHTML = audioTag;
        document.getElementById('singleAudio').appendChild(div);
        setTimeout(()=> {
            document.getElementById('singleAudio').removeChild(div);
        }, 1000)
    }
}

class CoffeeUpgrade {
    constructor(game) {
        this.game = game;
        this.coffeeDiv = document.getElementsByClassName('coffee')[0];
        this.game.addScoreListener((score) => {
            if(score % 50 === 0) {
                const div = document.createElement('div');
                const button = `<button class="coffee-upgrade">Coffe Upgrade</button>`;
                div.innerHTML = button;
                div.addEventListener('click', () => {
                    this.runUpgrade();
                    document
                      .getElementsByClassName("panel")[0]
                      .removeChild(div);
                });
                document.getElementsByClassName('panel')[0].appendChild(div);
            }
        });
    }

    runUpgrade() {
        this.game.employees.forEach((employee) => {
            employee.intervalTime = employee.intervalTime / 2;
            employee.updateInterval();
            this.coffeeDiv.classList.remove('hidden');
            setTimeout(() => {
                employee.intervalTime = employee.intervalTime * 2;
                this.coffeeDiv.classList.add('hidden');
            }, 20000);
        });
        this.game.addToScore(-120);
    }
}

new EmployeeClicker();