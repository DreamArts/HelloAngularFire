import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { firebaseConfig } from './firebaseConfig';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineInputComponent } from './timeline-input/timeline-input.component';
import { LoginComponent } from './login/login.component';
import { TimelineCellComponent } from './timeline-cell/timeline-cell.component';
import { HeaderComponent } from './header/header.component';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const routeSettings: Routes = [
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineInputComponent,
    LoginComponent,
    TimelineCellComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    RouterModule.forRoot(routeSettings),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
