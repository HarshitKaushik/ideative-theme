import { Component, OnInit } from '@angular/core';
import { ideas } from '../sample.data';

@Component({
  selector: 'app-idea-container',
  templateUrl: './idea-container.component.html',
  styleUrls: ['./idea-container.component.css']
})
export class IdeaContainerComponent implements OnInit {
  ideas: any[];

  constructor() { }

  ngOnInit() {
    this.ideas = ideas;
  }

}
