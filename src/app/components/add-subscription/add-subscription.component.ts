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
    this.addSubscriptionService.getYears().subscribe(data => this.years = data);
    this.addSubscriptionService.getMakes().subscribe(data => this.makes = data);
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

  onYearChange() {
    this.addSubscriptionService.getMakes(this.subscription).subscribe(data => this.makes = data);
    this.addSubscriptionService.getModels(this.subscription).subscribe(data => this.models = data);
  }

  onMakeChange() {
    this.addSubscriptionService.getYears(this.subscription).subscribe(data => this.years = data);
    this.addSubscriptionService.getModels(this.subscription).subscribe(data => this.models = data);
  }

  onModelChange() {
    this.addSubscriptionService.getYears(this.subscription).subscribe(data => this.years = data);
    if (this.subscription.year && this.subscription.make && this.subscription.model)
      this.addSubscriptionService.getTrims(this.subscription).subscribe(data => this.trims = data);
  }
}
