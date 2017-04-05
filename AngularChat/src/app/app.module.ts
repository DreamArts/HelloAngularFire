import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineInputComponent } from './timeline-input/timeline-input.component';

const routeSettings: Routes = [
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TimelineComponent,
    TimelineInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeSettings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
