import { Component } from '@angular/core';

@Component({
  selector: 'app-listItems',
  templateUrl: './list-items-component.component.html',
  styleUrls: ['./list-items-component.component.scss']
})
export class ListItemsComponentComponent  {
  urlBase:String ='./../../../assets/images/';
  items:any = [
    {
      "id": "249942",
      "name": "Hotel Stefanos",
      "stars": 3,
      "price": 994.18,
      "image": "4900059_30_b.jpg",
      "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
      ]
    },
    {
      "id": "161901",
      "name": "Hotel Santa Cruz",
      "stars": 3,
      "price": 1267.57,
      "image": "6623490_6_b.jpg",
      "amenities": [
        "nightclub",
        "business-center",
        "bathtub",
        "newspaper",
        "restaurant"
      ]
    },
    {
      "id": "161914",
      "name": "NM Lima Hotel",
      "stars": 4,
      "price": 1445.5,
      "image": "981018_26_b.jpg",
      "amenities": [
        "business-center",
        "nightclub",
        "deep-soaking-bathtub",
        "fitness-center",
        "garden"
      ]
    },
    {
      "id": "208599",
      "name": "El Golf Hotel Boutique",
      "stars": 4,
      "price": 1513.45,
      "image": "1191401_110_b.jpg",
      "amenities": [
        "safety-box",
        "bathrobes",
        "business-center",
        "beach-pool-facilities",
        "restaurant"
      ]
    },
    {
      "id": "236309",
      "name": "Casa Andina Select Miraflores",
      "stars": 4,
      "price": 1545.46,
      "image": "2a5bb415_b.jpg",
      "amenities": [
        "coffe-maker",
        "safety-box",
        "restaurant",
        "garden",
        "children-club"
      ]
    }
  ];

  constructor(){

  }

}
