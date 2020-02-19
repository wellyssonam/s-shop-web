import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  startLoading$ = new ReplaySubject<boolean>();

  constructor() { }

  startLoading() {
    this.startLoading$.next(true);
  }

  stopLoading() {
    this.startLoading$.next(false);
  }
}
