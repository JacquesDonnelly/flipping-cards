import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css'],
  animations: [
    trigger('changeDivSize', [
      state(
        'initial', 
        style(
          {
            transform: 'translateX(-100%)',
          }
        ),
      ),
      state(
        'final',
        style(
          {
            transform: 'translateX(10000%)'
          }
        )
      ),
      transition(
        'initial=>final',
         animate('100s'), 
      ),
      transition('final=>initial', animate('0s'))
      ]
    )
  ]
  }
)
export class PlaneComponent implements OnInit {

  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial'
  }

  constructor() { }

  ngOnInit() {
  }

}
