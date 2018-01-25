import 'rxjs/add/operator/toPromise';
import { Hotel } from "../models/hotel.model";
import { Filter } from '../models/filter.model';

export interface IHotels{
    findHotels(s:string):Promise<void | Hotel[]>
}