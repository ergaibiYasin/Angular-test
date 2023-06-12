import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  signIn() {
    this.isLoggedIn = this.authService.login(this.email, this.password);
    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    } else {
      alert("invalid cridentials!");
    }
  }

}
