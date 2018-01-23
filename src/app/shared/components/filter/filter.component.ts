import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public toShowFilters = false;
  public toShowName = true;
  public toShowStars = true;
  
  public MSG:object = {
    title_filter: 'filtros',
    filer_hotel_placeholder: 'Ingrese el nombre del hotel',
    filer_hotel_title: 'Nombre de hotel',
    filer_stars_title: 'Estrellas',
  }

  public statesStars:object = 
  {
      "starsFive": false,
      "starsFour": false,
      "starsThree": false,
      "starsOne": false,
      "starsTwo": false,
      "starts": true 
  }
  

  constructor() { }

  search( f:NgForm ) {
    let values = f.value;
    console.log(f, f.value)
    if(values.allStars){ 
      this.selectAllStars(f) 
    }else{
    } 
  }

  selectAllStars(f:NgForm){
    console.log(f)
  }

  closetAndOpenFilters(){
    this.toShowFilters = !this.toShowFilters;
  }

  closetAndOpenName(){
    this.toShowName = !this.toShowName;
  }

  closetAndOpenStars(){
    console.log("asda")
    this.toShowStars = !this.toShowStars;
  }

  ngOnInit() {
  }

}
