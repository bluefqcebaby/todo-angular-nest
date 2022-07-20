import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateCardsService {
  constructor() {}

  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  public getRefresh(): Observable<boolean> {
    return this.refresh.asObservable();
  }

  public setRefresh(value: boolean): void {
    this.refresh.next(value);
  }
}
