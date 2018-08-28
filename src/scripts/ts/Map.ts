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
        this.renderFloor(x, y, 'floor-1');
        this.renderWalls();
      }
    }
  }

  renderFloor(x: number, y: number, floorType: string) {
    const floor = document.createElement('div');
    floor.setAttribute('class', `sprite ${floorType}`);
    floor.style.position = 'absolute';
    floor.style.top = `${y}px`;
    floor.style.left = `${x}px`;
    this.mapContainer.appendChild(floor);
  }

  renderWalls() {

  }
}