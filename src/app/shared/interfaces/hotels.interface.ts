import 'rxjs/add/operator/toPromise';
import { Hotel } from "../models/hotel.model";

export interface IHotels{
    findHotels(filter: string):Promise<void | Hotel[]>
}