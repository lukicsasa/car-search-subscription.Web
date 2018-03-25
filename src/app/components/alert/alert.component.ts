import {Component, OnDestroy, OnInit} from '@angular/core';
import {Alert, AlertService} from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: Array<Alert> = [];
  constructor(private alertService: AlertService) {  }

  ngOnInit() {
    this.alertService.alertEmitter.subscribe((alert: Alert) => {
      this.alerts.push(alert);
      setTimeout(() => {
        this.close(alert);
      }, alert.duration || 3000);
    });
  }
  ngOnDestroy(): void {
    this.alertService.alertEmitter.unsubscribe();
  }

  close(alert: Alert) {
    const tmpIndex = this.alerts.indexOf(alert);
    if (tmpIndex !== -1) {
      this.alerts.splice(tmpIndex, 1);
    }
  }
}
