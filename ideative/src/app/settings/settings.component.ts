import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  chosenSettingsName = 'General Settings';


  constructor() { }

  ngOnInit() {
  }

  setChosenSettings(menuId: number): void {
    if (menuId === 1) {
      this.chosenSettingsName = 'General Settings';
    } else if (menuId === 2) {
      this.chosenSettingsName = 'Emails & Notifs';
    } else if (menuId === 3) {
      this.chosenSettingsName = 'Connected Services';
    } else if (menuId === 4) {
      this.chosenSettingsName = 'Terms & License';
    }
  }

}
