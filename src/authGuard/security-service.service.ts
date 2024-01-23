import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  private isAuthenticated: boolean = false;

  constructor() { }
  checkForAuth(data: any) {
    if (data) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
  Authenticated(){
    return this.isAuthenticated
  }
}
