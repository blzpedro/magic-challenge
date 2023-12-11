import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sets, Set } from '../models/Sets';
import { BehaviorSubject } from 'rxjs';
import { Booster } from '../models/Booster';

@Injectable({
  providedIn: 'root'
})
export class MtgService {

  private url = 'https://api.magicthegathering.io/v1';
  setsResponseSubject = new BehaviorSubject<Sets | undefined>(undefined);
  setsResponse$ = this.setsResponseSubject.asObservable();
  spinnerVisibleSubject = new BehaviorSubject<boolean>(false);
  spinnerVisibility$ = this.spinnerVisibleSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  getSets(queryParam: string){
    return this.http.get<Sets>(`${this.url}/sets?name=${queryParam}`, { observe: 'response' });
  }

  getBoosterBySetId(setId: string){
    return this.http.get<Booster>(`${this.url}/sets/${setId}/booster`, { observe: 'response' });
  }

  showSpinner() {
    this.spinnerVisibleSubject.next(true);
  }

  hideSpinner() {
    this.spinnerVisibleSubject.next(false);
  }
}
