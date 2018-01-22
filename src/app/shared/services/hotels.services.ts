import { Inject, Injectable } from "@angular/core";
import { Http } from "@angular/http";

import urljoin = require('url-join');
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { IHotels } from "../interfaces/hotels.interface";
import { Hotel } from "../Models/Hotel.model";


@Injectable()
export class HotelsService implements IHotels {
  
  private hotelsUrl: string;

  constructor(private http: Http) {
    this.hotelsUrl = urljoin(environment.apiUrl, 'hotels');
  }

  findHotels(query): Promise<void | Hotel[]> {
    const URL = urljoin(this.hotelsUrl, query);
    
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