import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public statesStars:Object = 
  {
      "starsFive": false,
      "starsFour": false,
      "starsThree": false,
      "starsOne": false,
      "starsTwo": false,
      "starts": true 
  }
  
  public toShowFilters = false;
  public toShowName = true;
  public toShowStars = true;
  
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
