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
  
  public MSG = {
    'title_filter': 'filtros',
    'filer_hotel_placeholder': 'Ingrese el nombre del hotel',
    'filer_hotel_title': 'Nombre de hotel',
    'filer_stars_title': 'Estrellas',
  }

  public statesStars = {
      five: false,
      four: false,
      three: false,
      two: false,
      one: false,
      all: true 
  }
  
  constructor() {}

  search(f:NgForm){
    console.log(f.value); 
  }
 
  onChance( f:NgForm ) {  

      if(this.statesStars.five || this.statesStars.four || this.statesStars.three ||
        this.statesStars.two || this.statesStars.one ){
          f.form.controls.all.setValue(false);
      }else{
          f.form.controls.all.setValue(true);
      }
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
