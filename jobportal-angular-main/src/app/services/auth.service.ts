import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
    // Implement actual authentication logic here
    if (username === 'Fatima' && password === '12345') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
