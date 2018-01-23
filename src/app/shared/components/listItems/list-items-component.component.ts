import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../../services/hotels.services';
import { Hotel } from "../../models/hotel.model";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-listItems',
  templateUrl: './list-items-component.component.html',
  styleUrls: ['./list-items-component.component.scss']
})

export class ListItemsComponentComponent implements OnInit{

  constructor(private itemsServices: HotelsService){}

  public MSG:object = {
    'price_label': 'Precio por noche por habitación',
    'symbole_price': 'ARS',
    'label_btn': 'Ver hotel'
  }
  
  URLBASEIMG:string = environment.apiUrlPublicImgHotels;
  items: Hotel[];
  loading = true;
  
  ngOnInit(){ 
    this.itemsServices
      .findHotels("?name=asds")
      .then((holtels: Hotel[]) => {
        this.items = holtels;
        this.loading = false
      })
  }

}
