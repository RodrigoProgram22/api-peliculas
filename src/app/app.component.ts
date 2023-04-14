import { Component } from '@angular/core';
import { ApiPeliService } from './service/api-peli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'api-pelis';
  peli: any = {};
  constructor(private apiP: ApiPeliService) {}

  ngOnInit(): void {
    this.apiP.getData().subscribe((data) => {
      this.peli = data;
      console.log(data);
      console.log(this.peli.Title);
    });
  }
}
