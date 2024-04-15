import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    // Perform authentication logic here (e.g., call an API)
    // For demonstration purposes, let's just store the username in local storage
    localStorage.setItem('currentUser', username);

    // Return true to indicate successful login
    return true;
  }

  logout(): void {
    // Clear the authentication token from local storage
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in by verifying if the authentication token exists in local storage
    return !!localStorage.getItem('currentUser');
  }
}
