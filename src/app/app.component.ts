import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Glassmorphism_dashboard';

  sideBarOpened: boolean = true

  toggle() {
    this.sideBarOpened = !this.sideBarOpened
  }
}
