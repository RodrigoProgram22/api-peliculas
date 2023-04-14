import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiPeliService {
  private urlAPI: string =
    'http://www.omdbapi.com/?apikey=d737c867&t=batman&plot=full';
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get(this.urlAPI);
  }
}
