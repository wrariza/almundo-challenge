import { Inject, Injectable } from "@angular/core";
import { Http } from "@angular/http";
import urlJoin from 'proper-url-join';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { IHotels } from "../interfaces/hotels.interface";
import { Hotel } from "../Models/Hotel.model";


@Injectable()
export class HotelsService implements IHotels {
  
  private hotelsUrl: string;

  constructor(private http: Http) {
    console.log(urlJoin)
    this.hotelsUrl = urlJoin(environment.apiUrl, 'hotels');
  }

  findHotels(filter: string): Promise<void | Hotel[]> {
    const URL = urlJoin(this.hotelsUrl, filter);
    
    return this.http.get(URL)
      .toPromise()
      .then(response => response.json() as Hotel[])
      .catch(this.handleError);
  }

  handleError(error:any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }

}