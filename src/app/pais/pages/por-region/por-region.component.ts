import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 10px;
  }
  `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  thayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClase(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.paises = [];
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
      .subscribe((response) => this.paises = response);
  }





}



