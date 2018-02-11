import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: any[];

  constructor() { }

  ngOnInit() {
    this.sessions = [{
      'sessionTitle': 'Idea Session Pehla',
      'sessionBody': 'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ultricies lacus sed turpis tincidunt. Magna etiam tempor orci eu lobortis elementum. Blandit libero volutpat sed cras ornare arcu dui. Amet luctus venenatis lectus magna.'
    }, {
      'sessionTitle': 'Idea Session Dwitya',
      'sessionBody': 'Vehicula ipsum a arcu cursus vitae congue mauris. At elementum eu facilisis sed odio morbi. Amet volutpat consequat mauris nunc congue nisi.'
    }, {
      'sessionTitle': 'Idea Session Trityaa',
      'sessionBody': 'Egestas maecenas pharetra convallis posuere morbi leo urna. Eget nulla facilisi etiam dignissim diam quis. Vulputate enim nulla aliquet porttitor lacus. Volutpat diam ut venenatis tellus in metus vulputate.'
    }, {
      'sessionTitle': 'Idea Session Pehla',
      'sessionBody': 'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ultricies lacus sed turpis tincidunt. Magna etiam tempor orci eu lobortis elementum. Blandit libero volutpat sed cras ornare arcu dui. Amet luctus venenatis lectus magna.'
    }, {
      'sessionTitle': 'Idea Session Dwitya',
      'sessionBody': 'Vehicula ipsum a arcu cursus vitae congue mauris. At elementum eu facilisis sed odio morbi. Amet volutpat consequat mauris nunc congue nisi.'
    }, {
      'sessionTitle': 'Idea Session Trityaa',
      'sessionBody': 'Egestas maecenas pharetra convallis posuere morbi leo urna. Eget nulla facilisi etiam dignissim diam quis. Vulputate enim nulla aliquet porttitor lacus. Volutpat diam ut venenatis tellus in metus vulputate.'
    }];
  }

}
