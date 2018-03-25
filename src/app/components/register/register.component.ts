import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {User} from '../../shared/models/user';
import {AlertService} from '../alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  confirmPassword: string;

  constructor(private registerService: RegisterService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  register = () => {
    if (this.user.password !== this.confirmPassword) {
      this.alertService.showError('Passwords don\'t match');
      return;
    }
    this.registerService.register(this.user);
  }

}
