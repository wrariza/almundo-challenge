import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FilterService } from '../../services/filter.services';
import { Filter } from '../../models/filter.model';

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
    'filter_allStars_label':'Todas las estrellas'
  }

  public name;
  public statesStars = {
      five: false,
      four: false,
      three: false,
      two: false,
      one: false,
      all: true 
  }
  
  
  constructor(private _filterServices: FilterService) {
    this._filterServices.search$.subscribe()
  }

  search(f:NgForm){
      this._filterServices.publishData(f.value);
  }
 
  onChance( f:NgForm ) {  
      if(this.statesStars.five || this.statesStars.four || this.statesStars.three ||
        this.statesStars.two || this.statesStars.one ){
          f.form.controls.all.setValue(false);
      }else{
          f.form.controls.all.setValue(true);
      }

      this.search(f);
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
