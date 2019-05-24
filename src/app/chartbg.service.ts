import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ChartbgService {
  bgColor = new BehaviorSubject('');
  constructor() { }

  setColor(colorClass: string) {
      this.bgColor.next(colorClass);
    }
}
