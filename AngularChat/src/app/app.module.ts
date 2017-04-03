import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { firebaseConfig } from './firebaseConfig';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineInputComponent } from './timeline-input/timeline-input.component';
import { LoginComponent } from './login/login.component';
import { TimelineCellComponent } from './timeline-cell/timeline-cell.component';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const routeSettings: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineInputComponent,
    LoginComponent,
    TimelineCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeSettings, { useHash: true, preloadingStrategy: PreloadAllModules }),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
