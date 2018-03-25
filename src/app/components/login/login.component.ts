import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { SessionService } from '../../shared/services/session.service';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private loginService: LoginService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    if(this.sessionService.isLoggedIn){
      this.router.navigate([this.sessionService.getDefaultRoute()]);
    }
  }

  login = () => {
    this.loginService.login(this.user);
  }

}
