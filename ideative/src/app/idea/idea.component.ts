import { reports } from './../sample.data';
import { Component, Input, OnChanges,  OnInit} from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
// tslint:disable-next-line:one-line
export class IdeaComponent implements OnChanges ,OnInit{

  @Input() ideaTitle: string;
  @Input() ideaDescription: string;
  @Input() likeCount: number = 0;
  reports: any[];
  dummyDate = new Date();

  constructor() { }

  onClickingLike():any {
    this.likeCount++;
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.reports = reports;
    console.log(reports);
  }

}
