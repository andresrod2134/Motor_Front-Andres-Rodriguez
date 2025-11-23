import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.css']
})
export class HomePageListComponent {

  showPilotoPanel = false;

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  openPilotoPanel() {
    this.showPilotoPanel = true;
  }

  closePanel() {
    this.showPilotoPanel = false;
  }
}

