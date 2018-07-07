import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BandDataService } from './band-data.service';
import { BandListComponent } from './band-list/band-list.component';
import { BandSearchComponent } from './band-search/band-search.component';
import { UserDataService } from './user-data.service';
import { BandCreateComponent } from './band-create/band-create.component';

const routes: Routes = [
  { path: 'bands', component: BandListComponent },
  { path: 'band-search', component: BandSearchComponent },
  { path: 'create', component: BandCreateComponent },
  { path: '', redirectTo: 'bands', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BandListComponent,
    BandSearchComponent,
    BandCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    BandDataService,
    UserDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
