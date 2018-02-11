import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaContainerComponent } from './idea-container/idea-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeaContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
