import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../constants/global-constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = GlobalConstants.SKILLS;
  constructor() { }

  ngOnInit(): void {
  }

}
