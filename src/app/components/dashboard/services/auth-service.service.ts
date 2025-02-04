import { UserService } from './user-service.service';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedUser = true;
  private validCredentials = { username: 'admin', password: '123456' };

  login(username: string, password: string): Observable<boolean> {
    if (
      username === this.validCredentials.username &&
      password === this.validCredentials.password
    ) {
      this.isAuthenticatedUser = true;
      return of(true);
    } else {
      return throwError(() => new Error('Usuário ou senha inválidos'));
    }
  }

  logout(): void {
    this.isAuthenticatedUser = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
}
