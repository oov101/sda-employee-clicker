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
        if(!this.score) {
            this.startAnimationWithFramePer(100);
        }

        this.score++;
        this.updateScore();
        this.playAudio('click');
    }

    updateScore() {
        this.scoreContainer.innerText = this.score;
    }

    startAnimationWithFramePer(milliseconds) {


        setInterval(() => {
            for(let i = 0; i < 5; i++) {
                ((i) => {
                    setTimeout(() => {
                        this.monitor.setAttribute('src', `./assets/sprites/monitor/monitor${i}.png`);
                    }, milliseconds*i);
                })(i);
            }
        }, milliseconds*4);

        setInterval(() => {
            for(let i = 0; i < 4; i++) {
                ((i) => {
                    setTimeout(() => {
                        this.pc.setAttribute('src', `./assets/sprites/pc/pc${i}.png`);
                    }, milliseconds*i);
                })(i);
            }
        }, milliseconds*3);

        setInterval(() => {
            for(let i = 0; i < 5; i++) {
                ((i) => {
                    setTimeout(() => {
                        this.coffee.setAttribute('src', `./assets/sprites/coffee/coffee${i}.png`);
                    }, (milliseconds + 100) * i);
                })(i);
            }
        }, (milliseconds + 100) * 4);
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