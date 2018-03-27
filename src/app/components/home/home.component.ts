import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Subscription } from '../../shared/models/subscription';
import { NotificationService } from '../../shared/services/notification.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AlertService } from '../alert/alert.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NotificationService]
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[];
  private listener;

  constructor(private homeService: HomeService, private alertService: AlertService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getSubscriptions();
    this.notificationService.connect();
    this.listener = this.notificationService.onEvent('notification')
      .subscribe(data =>
        this.alertService.showSuccess(data, 5000));
  }

  ngOnDestroy() {
    this.notificationService.close();
  }

  getSubscriptions() {
    this.homeService.getSubscriptions().subscribe(data => {
      this.subscriptions = data;
    });
  }

  toggleSubscription(id) {
    this.homeService.toggleSubscription(id).subscribe(data => this.getSubscriptions());
  }
}
