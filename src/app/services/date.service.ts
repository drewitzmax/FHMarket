import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  dateFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  prettyDate: string = 'DD.MM.YYYY HH:mm';

  constructor() {
  }

  public now(){
    return moment().format(this.dateFormat);
  }

  public format(date: string){
    return moment(date).format(this.prettyDate);
  }
}
