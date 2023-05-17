import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PokeInfoComponent } from './pages/poke-info/poke-info.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    PokeInfoComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
