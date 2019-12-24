import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipping-cards';
  triggerPlane = "no"

  flyPlane(event) {
    this.triggerPlane = (this.triggerPlane == 'no') ? 'yes' : 'no';
  }
}
