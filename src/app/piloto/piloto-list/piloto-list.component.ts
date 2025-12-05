import { Component, OnInit } from '@angular/core';
import { PilotoService } from './piloto.service';
import { Piloto } from '../piloto';
import { PageResponse } from '../page-response';

@Component({
  standalone: false,
  selector: 'app-piloto-list',
  templateUrl: './piloto-list.component.html',
  styleUrls: ['./piloto-list.component.css']
})
export class PilotoListComponent implements OnInit {

  pilotos: Piloto[] = [];
  page = 0;
  size = 5;
  totalPages = 0;

  selectedPiloto!: Piloto;
  selected = false;

  constructor(private pilotoService: PilotoService) {}

ngOnInit() {
  console.log("ESTE ES EL PilotoListComponent QUE ANGULAR ESTÁ USANDO");
  this.loadPage();
}

  loadPage() {
    this.pilotoService.getPilotosPaged(this.page, this.size)
      .subscribe((response: PageResponse<Piloto>) => {
        this.pilotos = response.content;
        this.totalPages = response.totalPages;
      });
  }

  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadPage();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
     	this.loadPage();
    }
  }

  onSelected(piloto: Piloto): void {
    this.selected = true;
    this.selectedPiloto = piloto;
  }

  ordenarPilotos(event: any): void {
    const criterio = event.target.value;

    switch (criterio) {
      case "nombre":
        this.pilotos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "fecha":
        this.pilotos.sort((a, b) =>
          new Date(b.fechaNacimiento).getTime() -
          new Date(a.fechaNacimiento).getTime()
        );
        break;
      case "pais":
        this.pilotos.sort((a, b) => a.pais.localeCompare(b.pais));
        break;
      case "rango":
        this.pilotos.sort((a, b) => a.rango.localeCompare(b.rango));
        break;
    }

    this.pilotos = [...this.pilotos];
  }

  goBack(): void {
    window.history.back();
  }
}