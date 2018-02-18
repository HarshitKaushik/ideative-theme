import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaContainerComponent } from './idea-container/idea-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionComponent } from './session/session.component';
import { BsModalModule } from 'ng2-bs3-modal';

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
    BrowserModule,
    MomentModule,
    BsModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
