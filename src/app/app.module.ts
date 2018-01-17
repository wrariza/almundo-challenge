import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Router,  RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

const AppRoutes = [
  { path: '',  component: AppComponent },
  { path: 'hotels',  component: AppComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
