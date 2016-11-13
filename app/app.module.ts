import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AUTH_PROVIDERS }      from 'angular2-jwt';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
