import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit , OnChanges {

  @Input()
  public numberStart: number = 0

  public stars: Array<number> = []

  ngOnChanges(){
    this.stars = []
    for(let i=0; i<this.numberStart; i++){
      this.stars.push(i)
    }
  }

  ngOnInit() {

  }

}
