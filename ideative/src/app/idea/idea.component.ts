import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnChanges {

  @Input() ideaTitle: string;
  @Input() ideaDescription: string;
  dummyDate = new Date();

  constructor() { }

  ngOnChanges() {
  }

}
