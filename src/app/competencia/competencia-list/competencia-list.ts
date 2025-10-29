import { Component, OnInit } from '@angular/core';
import {CompetenciaService} from '../competenciaService';
import { CompetenciaDetailDTO } from '../competenciaDetailDTO';

@Component({
  selector: 'app-competencia-list',
  standalone: false,
  templateUrl: './competencia-list.html',
  styleUrl: './competencia-list.css',
})
export class CompetenciaList implements OnInit{
  ngOnInit() {
    this.getCompetencias();
  }
  
  competencias: Array<CompetenciaDetailDTO> = [];
  selectedCompetencia!: CompetenciaDetailDTO;
  selected: boolean = false;

  constructor(private competenciaService: CompetenciaService) { }

  getCompetencias(){
    this.competenciaService.getCompetencias().subscribe(competencias=>{
      this.competencias = competencias;
    })
  }

  }
