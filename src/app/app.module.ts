import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Router,  RouterModule } from '@angular/router'
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListItemsComponentComponent } from './shared/components/listItems/list-items-component.component';

const AppRoutes = [
  { 
    path: '',
    component: AppComponent 
  },
  { 
    path: 'hotels',  
    component: AppComponent 
  },
]

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      ListItemsComponentComponent
  ],
  imports: [
    BrowserModule,
      LazyLoadImagesModule,
      RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
