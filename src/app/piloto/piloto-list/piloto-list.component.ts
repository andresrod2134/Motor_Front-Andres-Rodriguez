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

  ngOnInit() {
    this.getPilotos();
  }

}

