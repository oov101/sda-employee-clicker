export class Map {
  cols: number;
  rows: number;
  tsize: number;
  mapContainer!: Element;
  mapsizeX!: number;
  mapsizeY!: number;
  mapsize!: number;

  constructor(cols: number, rows: number, tsize: number) {
    this.cols = cols;
    this.rows = rows;
    this.tsize = tsize;
    this.init();
    this.renderMap();
  }

  init() {
    this.mapsizeX = this.tsize * this.rows;
    this.mapsizeY = this.tsize * this.cols;
    this.mapsize = this.mapsizeX * this.mapsizeY;
    this.mapContainer = document.getElementsByClassName('map-js')[0];
  }

  renderMap() {
    for(let c = 0, x = 0; c < this.cols; c++, x += this.tsize) {
      for(let r = 0, y = 0; r < this.rows; r++, y += this.tsize) {
        this.renderElement(x, y, 'floor-1');
        this.renderCorners(c, r, () => {return this.renderElement(x, y, 'wall-corner-1')});
      }
    }
  }

  renderCorners(c: number, r: number, renderElement: Function) {
    if (c === 0 && r === 0) {
      this.moveElement(renderElement(), -44, -44);
    }
    
    if (c === this.cols - 1 && r === 0) {
      this.moveElement(renderElement(), 44, -44, 90);
    }

    if (c === 0 && r === this.rows - 1) {
      this.moveElement(renderElement(), -44, 44, -90);
    }
    
    if (c === this.cols - 1 && r === this.rows - 1) {
      this.moveElement(renderElement(), 44, 44, 180);
    }
  }

  renderWalls() {

  }

  
  renderElement(x: number, y: number, sprite: string): Element {
    const element = document.createElement('div');
    element.setAttribute('class', `sprite ${sprite}`);
    element.style.position = 'absolute';
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    this.mapContainer.appendChild(element);
    return element;
  }
  
  moveElement(element: HTMLElement, left?: number, top?: number, rotateAngle?: number) {
    element.style.transform = `rotate(${rotateAngle}deg)`;
    // @ts-ignore error: possibly null
    element.style.top = `${Number(element.style.top.match(/\d+/g)[0]) + top}px`;
    // @ts-ignore error: possibly null
    element.style.left = `${Number(element.style.left.match(/\d+/g)[0]) + left}px`;
  }
}