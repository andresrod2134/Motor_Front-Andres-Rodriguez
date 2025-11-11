import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca.model';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {
  marcas: Marca[] = [];
  cargando = false;
  error?: string;

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.cargando = true;
    this.marcaService.getMarcas().subscribe({
      next: (data) => { this.marcas = data ?? []; this.cargando = false; },
      error: (e) => { console.error(e); this.error = 'No se pudieron cargar las marcas.'; this.cargando = false; }
    });
  }
}
