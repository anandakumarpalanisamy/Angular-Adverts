import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.sass']
})
export class AuthButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
