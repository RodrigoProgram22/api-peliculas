import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiPeliService {
  private urlAPI: string = 'http://www.omdbapi.com/';
  private apiKey: string = 'd737c867';
  constructor(private http: HttpClient) {}

  public getData(titulo: string): Observable<any> {
    return this.http.get(
      `${this.urlAPI}?apikey=${this.apiKey}&t=${titulo}&plot=full`
    );
  }
}
// http://www.omdbapi.com/?apikey=d737c867&t=batman&plot=full
