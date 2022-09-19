import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';
//tap dispara un "efecto secundario"


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((res:Country[])=>{
        res.forEach(element => {
          this.pais = element;
        })
      })
      /* .subscribe(pais => this.pais = pais[0]); */
      

  }

}
