import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private userId: BehaviorSubject <number> = new BehaviorSubject(-1);

  public logIn(id: number) {
    this.userId.next(id);
  }

  public IsAuthenticated(): boolean {
    return this.userId.value !== -1 ? true : false;
  }

  public logout() {
    this.userId.next(-1);
  }

  public getLoggedInUser(): Observable<number> {
    return this.userId.asObservable();
  }

}
