import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaContainerComponent } from './idea-container/idea-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionComponent } from './session/session.component';
import { BsModalModule } from 'ng2-bs3-modal';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeaContainerComponent,
    NavBarComponent,
    SessionListComponent,
    SessionComponent,
    LoginComponent,
    DashboardComponent,
    AccountComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MomentModule,
    BsModalModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'settings', component: SettingsComponent},
      { path: 'account', component: AccountComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full'}
    ]),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
