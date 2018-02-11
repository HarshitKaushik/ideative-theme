import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnChanges {
  @Input() sessionTitle: string;
  @Input() sessionDesc: string;

  constructor() { }

  ngOnChanges() {
  }

}
