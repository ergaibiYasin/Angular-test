import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  loggedIn: boolean = false;
  isLoggedIn = false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  signUp(): void {
    this.authService.signUp(this.name, this.email, this.password, this.loggedIn);
    // Redirect to the sign-in page after successful sign-up
    this.router.navigate(['/signin']);
  }
}

