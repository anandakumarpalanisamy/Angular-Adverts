import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/providers/auth.service';
import { SessionService } from '../../core/providers/session.service';
import { AuthData } from '../../core/models/AuthData.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  error: string;

  registerForm = new FormGroup ({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionService) { }

  onSubmitForm() {
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value).subscribe(
        (data: AuthData) => {
          this.sessionService.setToken(data.token);
          this.sessionService.setUser(data.user);
          this.router.navigate(['/adverts']);
        }, (error) => {
          console.log(error);
        }
      );
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
