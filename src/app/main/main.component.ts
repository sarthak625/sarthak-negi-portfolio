import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../constants/global-constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  profilePicture = GlobalConstants.PROFILE_IMG;
  constructor() { }

  ngOnInit(): void {
  }

}
