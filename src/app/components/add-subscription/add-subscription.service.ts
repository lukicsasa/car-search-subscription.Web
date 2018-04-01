import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AddSubscriptionService {

  constructor(private request: RequestService) { }

  addSubscription(subscription) {
    return this.request.post('subscription', subscription).
            pipe(catchError(err => this.request.handleError(err)));
  }

  getYears(subscription = null) {
    return this.request.get('car/years', subscription)
            .pipe(catchError(err => this.request.handleError(err)));
  }

  getMakes(subscription = null) {
    return this.request.get('car/makes', subscription)
            .pipe(catchError(err => this.request.handleError(err)));
  }

  getModels(subscription) {
    return this.request.get('car/models', subscription)
            .pipe(catchError(err => this.request.handleError(err)));
  }

  getTrims(subscription) {
    return this.request.get('car/trims', subscription)
            .pipe(catchError(err => this.request.handleError(err)));
  }
}
