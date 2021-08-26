import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../constants/global-constants';
import { trigger, style, transition, animate, keyframes, query, 
  stagger, state, group } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [
    trigger('valueAnimation', [
      transition(':increment', [
          style({ color: '#673ab7' }),
          animate('0.5s ease-in', style('*'))
        ]
      ),
      transition(':decrement', [
          style({ color: '#673ab7' }),
          animate('0.8s ease-out', style('*'))
        ]
      )
    ])
  ],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  profilePicture = GlobalConstants.PROFILE_IMG;
  specializesIn = GlobalConstants.SPECIALIZATIONS;
  randomIndex = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval( () =>{
      this.randomIndex ++;
      if (this.randomIndex >= this.specializesIn.length) {
        this.randomIndex = 0;
      }
    }, 1000);
  }

}
