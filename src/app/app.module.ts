import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcenterComponent } from './viewcenter/viewcenter.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchcenterPipe } from './searchcenter.pipe';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CenterDetailsComponent } from './center-details/center-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewcenterComponent,
    SearchcenterPipe,
    AddcenterComponent,
    CenterDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
