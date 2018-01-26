import { Component, OnInit } from '@angular/core';

import { HotelsService } from '../../services/hotels.services';
import { FilterService } from '../../services/filter.services';
import { Hotel } from "../../models/hotel.model";
import { Filter } from "../../models/filter.model";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-listItems',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponentComponent implements OnInit{
  public starts = [];
  public MSG:object = {
    'price_label': 'Precio por noche por habitación',
    'symbole_price': 'ARS',
    'label_btn': 'Ver hotel'
  }
  
  private URLBASEIMG:string = environment.apiUrlPublicImgHotels;
  private items: Hotel[];
  loading = true;


  constructor(private itemsServices: HotelsService,  private filterService:FilterService ){
    this.filterService.search$.subscribe(
      data => this.listItems(data)
    )
  }

  listItems(filter?:Filter){
    console.log(filter);
      this.starts = [];

      if(filter){
        filter.all ? this.starts.push(-1) : '';
        filter.five ? this.starts.push(5) : '';
        filter.four ? this.starts.push(4) : '';
        filter.three ? this.starts.push(3) : '';
        filter.two ? this.starts.push(2) : '';
        filter.one ? this.starts.push(1) : '';
      }
      
    let query = filter ? `?name=${filter.name}&stars=${this.starts}` :
      `?name=&stars=-1`
    this.itemsServices
      .findHotels(query)
      .then((holtels: Hotel[]) => {
        this.items = holtels;
        this.loading = false
      })
  }
  
  ngOnInit(){ 
    this.listItems()
  }

}
