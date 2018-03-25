import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { SessionService } from '../../shared/services/session.service';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  user: User = new User();
  constructor(private requestService: RequestService, private sessionService: SessionService, private router: Router) { }

  login = (user: User) => {
    this.requestService.post('user/login', {...user}).subscribe(
      data => {
        this.sessionService.initSession(data.token, data.user);
        this.router.navigate([this.sessionService.getDefaultRoute()]);
      },
      err => this.requestService.handleError(err)
    );
  }
}
