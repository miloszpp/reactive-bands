import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BandDataService } from './band-data.service';
import { BandListComponent } from './band-list/band-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BandListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BandDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
