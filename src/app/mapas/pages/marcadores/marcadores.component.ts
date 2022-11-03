import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { map } from 'rxjs';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }

    li {
      cursor: pointer;
    }
  `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-75.48983051866664, 5.065707743505762];
  
  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: this.center, 
      zoom: this.zoomLevel
    });

    /* const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';

    new mapboxgl.Marker({
      element: markerHtml
    })
      .setLngLat(this.center)
      .addTo(this.mapa); */
  }

  agregarMarcador() {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
  }

  irMarcador() {

  }

}
