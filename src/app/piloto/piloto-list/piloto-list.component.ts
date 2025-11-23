import { Component, OnInit } from '@angular/core';
import { PilotoService } from './piloto.service';
import { Piloto } from '../piloto';

@Component({
  standalone: false,
  selector: 'app-piloto-list',
  templateUrl: './piloto-list.component.html',
  styleUrls: ['./piloto-list.component.css']
})
export class PilotoListComponent implements OnInit {

  pilotos: Array<Piloto> = [];
  selectedPiloto!: Piloto;
  selected = false;

  constructor(private pilotoService: PilotoService) { }

  ngOnInit() {
    this.getPilotos();
  }

  getPilotos(): void {
    this.pilotoService.getPilotos().subscribe((pilotos) => {
      console.log('Pilotos que llegaron:', pilotos);
      this.pilotos = pilotos;
    });
  }

  onSelected(piloto: Piloto): void {
    this.selected = true;
    this.selectedPiloto = piloto;
    console.log('Piloto seleccionado:', piloto);
  }
  ordenarPilotos(event: any): void {
  const criterio = event.target.value;

  switch (criterio) {

    case "nombre":
      this.pilotos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;

    case "fecha":

      this.pilotos.sort((a, b) => 
        new Date(b.fechaNacimiento).getTime() - new Date(a.fechaNacimiento).getTime()
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


