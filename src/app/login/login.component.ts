import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string;


  constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private AuthService: AuthService) {

        // redirection si déjà connecté
        if (this.AuthService.currentUserValue) {
          this.router.navigate(['/users']);
      }

         }

  ngOnInit(){

    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
  }


  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.AuthService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/users']);
            },
            error => {
                this.errorMessage = error;
                this.loading = false;
            });
}




}
