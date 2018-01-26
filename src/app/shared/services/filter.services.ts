import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Filter } from '../models/filter.model';
@Injectable()
export class FilterService {
  private filterSearch = new Subject<Filter>();  

  search$ = this.filterSearch.asObservable();

  publishData(filter: Filter) {
    this.filterSearch.next(filter);
  }

}