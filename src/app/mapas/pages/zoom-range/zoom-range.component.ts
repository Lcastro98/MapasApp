import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .row {
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px
    }
  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { 
    console.log('constructor', this.divMapa)
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit', this.divMapa);
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [-75.48983051866664, 5.065707743505762], 
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    });
    
    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    })
  }

  zoomOut() {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn(){
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio(valor: string) {
    this.mapa.zoomTo(Number(valor));
  }

}