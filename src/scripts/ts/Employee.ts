import { EmployeeClicker } from 'EmployeeClicker';

export class Employee {
    game: EmployeeClicker;
    intervalTime: number;
    element: HTMLDivElement;
    intervalId: any;
    map: Element;
    
    constructor(game: EmployeeClicker) {
        this.game = game;
        this.map = this.game.map.mapContainer;
        this.intervalTime = 5000;
        this.element = document.createElement('div');
        this.element.addEventListener('click', () => {
            this.click();
        });
        this.updateInterval();
        this.drawEmployee();
    }

    drawEmployee() {
        this.map.appendChild(this.element);
        this.element.setAttribute('class', 'employee-frame-0');
        this.element.style.zIndex = '1';
        this.element.style.top = '106px';
        this.element.style.left = '302px';
        this.element.style.transform = 'rotate(8deg)';
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