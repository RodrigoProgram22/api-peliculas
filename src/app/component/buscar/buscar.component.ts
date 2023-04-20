import { Component, OnInit } from '@angular/core';
import { ApiPeliService } from 'src/app/service/api-peli.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  peli!: any;
  constructor(private apiP: ApiPeliService) {}
  titulo: string = '';
  ngOnInit(): void {}
  buscar() {
    this.apiP.getData(this.titulo).subscribe((data) => {
      this.peli = data;
    });
  }
}
