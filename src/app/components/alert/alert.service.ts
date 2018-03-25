import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private _alertEmitter;
  constructor() {
    this._alertEmitter = new Subject();
  }
  get alertEmitter() {
    return this._alertEmitter;
  }

  showError(message: string) {
    const tmpMsg = {
      detail: message,
      type: 'danger',
      duration: 5000
    };
    this._alertEmitter.next(tmpMsg);
  }
  showSuccess(message: string, duration: number = null) {
    const tmpMsg = {
      detail: message,
      type: 'success',
      duration: duration || 5000
    };
    this._alertEmitter.next(tmpMsg);
  }
  show(alert: Alert) {
    this._alertEmitter.next(alert);
  }
}

export class Alert {
  message: string;
  duration?: number;
  type?: string;
}
