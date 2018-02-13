import { Component, OnInit } from '@angular/core';
import { sessions } from '../sample.data';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: any[];

  constructor() { }

  ngOnInit() {
    this.sessions = sessions;
  }

}
