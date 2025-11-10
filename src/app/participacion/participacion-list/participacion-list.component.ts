import { Component, OnInit } from '@angular/core';
import { Participacion } from '../participacion';

@Component({
  standalone: false,
  selector: 'app-participacion-list',
  templateUrl: './participacion-list.component.html',
  styleUrls: ['./participacion-list.component.css']
})
export class ParticipacionListComponent implements OnInit {

  participaciones: Array<Participacion> = [];
  constructor() { }

  ngOnInit() {
  }

}
