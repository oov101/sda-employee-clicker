interface MapElement {
  name: string;
  x: number;
  y: number;
  rotate?: number;
}

export class Map {
  mapContainer: Element;

  constructor() {
    this.mapContainer = document.getElementsByClassName('map')[0];
    this.getMap();
  }

  getMap() {
    fetch('assets/map.json').then(response => {
      return response.json();
    }).then(myJSON => {
      this.renderMap(myJSON);
    });
  }

  renderMap(map: MapElement[]) {
    map.forEach(element => {
      const div = document.createElement('div');
      div.setAttribute('class', `${element.name}`);
      div.style.setProperty('top', `${element.y}px`);
      div.style.setProperty('left', `${element.x}px`);
      if (element.rotate) {
        div.style.setProperty('transform-orgin', '39% 50%' )
        div.style.setProperty('transform', `rotate(${element.rotate}deg)`);
      }
      this.mapContainer.appendChild(div);
    });
  }
}