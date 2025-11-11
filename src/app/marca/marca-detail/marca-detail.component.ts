import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca.model';

@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {
  marca?: Marca;
  cargando = false;
  error?: string;

  constructor(private route: ActivatedRoute, private marcaService: MarcaService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.error = 'ID inválido'; return; }

    this.cargando = true;
    this.marcaService.getMarca(id).subscribe({
      next: (m) => { this.marca = m; this.cargando = false; },
      error: (e) => { console.error(e); this.error = 'No se pudo cargar la marca.'; this.cargando = false; }
    });
  }
}
