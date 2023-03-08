import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router,
    public commonSerivce: CommonService
  ) { }

  login(data: any): void {
    if (data.email == environment.email && data.password == environment.password) {
      this.setAuthentication()
      this.router.navigateByUrl('/pages')
    } else {
      this.commonSerivce.toast("Invalid credentials!")
    }
  }

  isAuthenticated(): boolean {
    if (this.getAuthentication()) {
      return true
    } else {
      return false
    }
  }

  setAuthentication(): void {
    localStorage.setItem('isAuthenticated', 'true');
  }

  getAuthentication() {
    return localStorage.getItem('isAuthenticated');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }

}
