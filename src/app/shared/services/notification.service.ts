import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService {
  private socket;
  constructor(private session: SessionService) { }

  connect() {
    this.socket = socketIo(environment.socketUri);
    this.socket.emit('authenticate', { user: this.session.user });
  }

  onEvent(event): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, (data: any) => observer.next(data));
    });
  }

  close() {
    this.socket.close();
  }
}
