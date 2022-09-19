import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {



  //https://restcountries.com/v2/all?fields=name,capital,alpha2Code,flag,population
    //Si quisiera poner parametros
    //const params = new HttpParams()
    //.set('fields','name,capital,alpha2Code,flag,population')
    //y dentro de la peticion se pondrian los parametros (url, { params })


    const url = `https://restcountries.com/v2/regionalbloc/${region}`;
    return this.http.get<Country[]>(url)
      .pipe(
        tap(console.log)
      )
  }






}
