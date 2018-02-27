import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(public router: Router, public toastr: ToastrService) {}

  ngOnInit() {}

  submitLoginForm(): void {
    this.toastr.success('Logged in successfully!');
    this.router.navigate(['/dashboard']);
  }
}
