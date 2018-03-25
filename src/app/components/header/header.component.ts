import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }
  
  logout = () => {
    this.sessionService.logout();
  }

}
