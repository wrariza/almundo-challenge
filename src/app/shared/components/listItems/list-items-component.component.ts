import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.services';
import { Hotel } from "../../models/hotel.model";

@Component({
  selector: 'app-listItems',
  templateUrl: './list-items-component.component.html',
  styleUrls: ['./list-items-component.component.scss']
})

export class ListItemsComponentComponent implements OnInit{

  constructor(private itemsServices: HotelsService){}
  
  items: Hotel[];
  loading = true;

  ngOnInit(){ 
    this.itemsServices
      .findHotels('')
      .then((holtels: Hotel[]) => {
        this.items = holtels;
        this.loading = false
      })
  }

}
