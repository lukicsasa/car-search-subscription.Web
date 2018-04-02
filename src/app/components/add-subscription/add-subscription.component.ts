import { Component, OnInit } from '@angular/core';
import { AddSubscriptionService } from './add-subscription.service';
import { Subscription } from '../../shared/models/subscription';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { OfflineService } from '../../shared/services/offline.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css'],
  providers: [AddSubscriptionService, OfflineService]
})
export class AddSubscriptionComponent implements OnInit {
  subscription = new Subscription();
  years: Number[];
  makes: Number[];
  models: Number[];
  trims: Number[];
  constructor(private addSubscriptionService: AddSubscriptionService, private router: Router, private alertService: AlertService, private offlineService: OfflineService) {
  }

  ngOnInit() {
    this.filter();
  }

  subscribe(form) {
    if (!form.valid) return;
    if (!this.subscription.make && !this.subscription.model && !this.subscription.trim && !this.subscription.year) {
      this.alertService.showError('At least one filter needs to be populated!');
      return;
    }
    this.addSubscriptionService.addSubscription(this.subscription)
      .subscribe(data => this.router.navigate(['home']));
  }

  filter() {
    this.addSubscriptionService.filter(this.subscription).subscribe(data => {
      this.years = data.years;
      this.makes = data.makes;
      this.models = data.models;
      this.trims = data.trims;
    });
  }

  onChange() {
    this.filter();
  }
}
