import {Injectable} from '@angular/core';
import {RequestService} from '../../shared/services/request.service';
import {User} from '../../shared/models/user';
import {AlertService} from '../alert/alert.service';
import {Router} from '@angular/router';

@Injectable()
export class RegisterService {

  constructor(private requestService: RequestService, private alertService: AlertService, private router: Router) {
  }

  register = (user: User) => {
    return this.requestService.post('user/register', {...user}).subscribe(
      data => {
        this.alertService.showSuccess('Registred successfully, redirecting to login page...!');
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      },
      err => this.requestService.handleError(err)
    );
  }

}
