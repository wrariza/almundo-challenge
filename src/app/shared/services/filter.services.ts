import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class FilterService {
  // Observable string sources
  private filterSearch = new Subject<string>();  

  // Observable string streams
  search$ = this.filterSearch.asObservable();

  // Service message commands
  publishData(data: string) {
    this.filterSearch.next(data);
  }

}