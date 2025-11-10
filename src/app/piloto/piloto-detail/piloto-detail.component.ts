import { Component, Input, OnInit } from '@angular/core';
import { Piloto } from '../piloto';

@Component({
  selector: 'app-piloto-detail',
  standalone: false,
  templateUrl: './piloto-detail.component.html',
  styleUrls: ['./piloto-detail.component.css'],
})
export class PilotoDetailComponent implements OnInit {
  @Input() pilotoDetail!: Piloto;

  constructor() {}

  ngOnInit(): void {}
}
