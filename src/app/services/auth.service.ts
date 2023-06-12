import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userDataKey = 'userData';

  constructor(private http: HttpClient) { }

  signUp(name: string, email: string, password: string, loaggedIn: boolean): void {
    const userData = {
      name: name,
      email: email,
      password: password,
      loaggedIn: loaggedIn
    };

    localStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }

  login(email: string, password: string): boolean {
    const userDataString = localStorage.getItem(this.userDataKey);
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.email === email && userData.password === password) {
        userData.loaggedIn = true;
        localStorage.setItem(this.userDataKey, JSON.stringify(userData));
        return true;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    const userDataString = localStorage.getItem(this.userDataKey);
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      return userData.loaggedIn
    }
    return false;
  }
}
