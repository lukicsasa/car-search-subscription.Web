import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AddSubscriptionService {

  constructor(private request: RequestService) { }

  addSubscription = (subscription) => {
    return this.request.post('subscription', subscription).
            pipe(catchError(err => this.request.handleError(err)));
    
  }
}
