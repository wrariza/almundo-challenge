import { Component, OnInit } from '@angular/core';

import { HotelsService } from '../../services/hotels.services';
import { FilterService } from '../../services/filter.services';
import { Hotel } from "../../models/hotel.model";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-listItems',
  templateUrl: './list-items-component.component.html',
  styleUrls: ['./list-items-component.component.scss']
})

export class ListItemsComponentComponent implements OnInit{

  constructor(private itemsServices: HotelsService,  private filterService:FilterService ){
    this.filterService.search$.subscribe(
      data => this.listItems(data)
    )

  }

  public MSG:object = {
    'price_label': 'Precio por noche por habitación',
    'symbole_price': 'ARS',
    'label_btn': 'Ver hotel'
  }
  
  URLBASEIMG:string = environment.apiUrlPublicImgHotels;
  items: Hotel[];
  loading = true;


  listItems(s:string){
    console.log(s);
    this.itemsServices
      .findHotels("?name=asds")
      .then((holtels: Hotel[]) => {
        this.items = holtels;
        this.loading = false
      })
  }
  
  ngOnInit(){ 
    this.listItems('')
  }

}
