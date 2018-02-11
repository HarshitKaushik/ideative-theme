import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaContainerComponent } from './idea-container/idea-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeaContainerComponent,
    NavBarComponent,
    SessionListComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
