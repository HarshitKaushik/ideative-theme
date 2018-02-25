import { reports } from './../sample.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  @Input() ideaTitle: string;
  @Input() ideaDescription: string;
  @Input() likeCount = 0;
  reports: any[];
  dummyDate = new Date();

  constructor() {}

  onClickingLike(): any {
    this.likeCount++;
  }

  ngOnInit() {
    this.reports = reports;
  }
}
