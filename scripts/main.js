class EmployeeClicker {
    constructor() {
        this.score = 0;
        this.init();
    }

    init() {
        this.employee = document.getElementsByClassName('employee')[0];
        this.monitor = document.getElementsByClassName('monitor')[0];
        this.pc = document.getElementsByClassName('pc')[0];
        this.coffee = document.getElementsByClassName('coffee')[0];
        this.employee.addEventListener('click', () => {
            this.click();
        });
        this.scoreContainer = document.getElementsByClassName('score')[0];
        this.updateScore();
    }
    
    click() {
        this.score++;
        this.updateScore();
        this.playAudio('click');
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