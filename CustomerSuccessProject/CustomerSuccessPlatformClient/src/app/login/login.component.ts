
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from '../services/api.service';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  users: any
  error = '';
  @ViewChild('tabGroup')
  tabGroup!: MatTabGroup;

  changeTab(index: number) {
    this.tabGroup.selectedIndex = index;
  }
  constructor(private authorizationService: AuthorizationService, private apiService: ApiService, private fb: FormBuilder, private auth: AuthService, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      userRole: ['', Validators.required],
    });

    this.users = authorizationService.getAllUsers()
    this.registerForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userName: ['', Validators.required]
    });
    this.auth.isAuthenticated$.subscribe(auth => {
      if (auth) {
        this.router.navigate(['dashboard/project']);
      }
    })

  }
  ngOnInit() {

  }
  Login() {
    this.auth.loginWithRedirect()
  }

  // Function to handle login form submission
  ManualLogin() {
    console.log('Login Form Submitted!', this.loginForm.value);
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value, "Pankaj7464").subscribe(data => {
        data = JSON.parse(data)
        console.log(data);
        if (data.result == 1) {
          this.apiService.showSuccessToast("Login Success")
        }

        // this.router.navigate(['dashboard/project']);
      },
        error => {
          this.apiService.showSuccessToast(" There was an error")
        }
      )
    } else {
      // Form is invalid, display error or take appropriate action
    }
  }

  // Function to handle register form submission
  register() {
    if (this.registerForm.valid) {
      console.log('Register Form Submitted!', this.registerForm.value);
      this.apiService.register({ ...this.registerForm.value, appName: "CSP" }).subscribe(data => {
        console.log(data);
        this.apiService.showSuccessToast("Register Success")
        this.router.navigate(['login']);
      },
        error => {
          this.apiService.showSuccessToast(" There was an error")
        }
      )
    } else {

    }
  }



}