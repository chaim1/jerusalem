import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageCardsService extends BehaviorSubject<any>{
  _active =[];
  constructor() { 
    super('')
    this._active.includes(this.value) ? '' :this._active.push(this.value);
    this.next(this._active)
  }
}
