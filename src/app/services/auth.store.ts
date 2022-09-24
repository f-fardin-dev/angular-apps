import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private subject = new BehaviorSubject<User | null>(null);

  user$: Observable<User | null> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = new Observable<false>();

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
  }
  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<User> {
    return this.http.post<User>('/api/login', { email, password }).pipe(
      tap((user) => this.subject.next(user)),
      shareReplay()
    );
  }
  logout() {
    this.subject.next(null);
  }
}
