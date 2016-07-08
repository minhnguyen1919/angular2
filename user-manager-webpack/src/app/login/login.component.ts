import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth';

@Component({
  selector: 'login',
  template: require('./login.component.jade')
})

export class LoginComponent {


  constructor(
    private router: Router,
    private authService: AuthService) {}

  login() {
    this.authService.login().subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    this.authService.logout();
  }

}
