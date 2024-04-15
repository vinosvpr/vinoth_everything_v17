import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username: string = 'vinoth';
  password: string = '112233';
  loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    // Store the username in session storage
    sessionStorage.setItem('username', username);

    // Call the login method from the authentication service
    if (this.authService.login(username, password)) {
      // Navigate to home component if login is successful
      this.router.navigateByUrl('home');
    } else {
      // Handle login failure (e.g., display error message)
    }
  }
  // login(): void {
  //   // if ((this.username == 'vinoth', this.password == '112233')) {
  //   //   this.authService.login(this.username, this.password);
  //   //   this.router.navigateByUrl('home');
  //   //   alert(`Successsfully logged in`);
  //   // } else {
  //   //   alert(`Wrong Credentials!`);
  //   // }
  //   // Optionally, you can redirect the user to a different page after successful login

  // }
}
