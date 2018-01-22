import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Router,  RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

import { HotelsService } from './shared/services/hotels.services';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListItemsComponentComponent } from './shared/components/listItems/list-items-component.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { StarComponent } from './shared/components/star/star.component';
import { LoadingComponent } from './shared/components/loading/loading.component';


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
      ListItemsComponentComponent,
      FilterComponent,
      StarComponent,
      LoadingComponent,
  ],
  imports: [
    BrowserModule,
      LazyLoadImagesModule,
      RouterModule.forRoot(AppRoutes),
      HttpModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
