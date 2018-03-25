import { Component } from '@angular/core';
import { SessionService } from './shared/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cars';

  isLoggedIn: boolean;
  constructor(private sessionService: SessionService) {
    this.isLoggedIn = this.sessionService.isLoggedIn;
    this.sessionService.sessionChangedStream.subscribe(data => {
      this.isLoggedIn = this.sessionService.isLoggedIn;
    });
  }
}
