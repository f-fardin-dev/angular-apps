import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, tap } from 'rxjs';
import { User } from '../models/user';

const AUTH_DATA = 'auth_data';
@Injectable({ providedIn: 'root' })
export class AuthStore {
  private subject = new BehaviorSubject<User | null>(null);

  user$: Observable<User | null> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = new Observable<false>();

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }
  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<User> {
    return this.http.post<User>('/api/login', { email, password }).pipe(
      tap((user) => {
        this.subject.next(user);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user));
      }),
      shareReplay()
    );
  }
  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
