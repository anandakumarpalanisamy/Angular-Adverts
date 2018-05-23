import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/providers/auth.service';
import { SessionService } from '../../core/providers/session.service';
import { AuthData } from '../../core/models/AuthData.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  error: string;

  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionService) { }

  onSubmitForm() {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe(
        (data: AuthData) => {
          console.log(data);
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
