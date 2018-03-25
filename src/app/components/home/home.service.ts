import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { SessionService } from '../../shared/services/session.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(private request: RequestService) { }

  getSubscriptions = () => {
    return this.request.get('subscription').
      pipe(catchError(err => this.request.handleError(err)));
  }


  toggleSubscription = (id) => {
    return this.request.post('subscription/toggle/' + id).
      pipe(catchError(err => this.request.handleError(err)));
  }
}
