import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    login: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('credentials')) {
      this.router.navigate(['/features']);
    }

  }
  login() {
    localStorage.setItem('credentials', JSON.stringify(this.credentials));
    this.router.navigate(['/features']);
  }

}
