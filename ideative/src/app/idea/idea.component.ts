import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnChanges {

  @Input() ideaTitle: string;
  @Input() ideaDescription: string;
  @Input() likeCount: number = 0;
  dummyDate = new Date();

  constructor() { }

  onClickingLike():any {
    this.likeCount++;
  }

  ngOnChanges() {
  }

}
