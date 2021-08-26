import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Node JS' },
    { name: 'Angular' },
    { name: 'MongoDB' },
    { name: 'SQL' },
    { name: 'EC2' },
    { name: 'S3' },
    { name: 'AWS Lambda' },
    { name: 'AWS Cloudfront' },
    { name: 'AWS IAM' },
    { name: 'AWS Route 53' },
    { name: 'Kubernetes' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'Shell Scripting' },
    { name: 'Python' },
    { name: 'Janus WebRTC' },
    { name: 'Jitsi Meet' },
    { name: 'Transcoding services'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
