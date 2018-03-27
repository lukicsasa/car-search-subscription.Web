import { Component, OnInit } from '@angular/core';
import { AddSubscriptionService } from './add-subscription.service';
import { Subscription } from '../../shared/models/subscription';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent implements OnInit {
  subscription = new Subscription();
  constructor(private addSubscriptionService: AddSubscriptionService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  subscribe = (form) => {
    if(!form.valid) return;
    if(!this.subscription.make && !this.subscription.model && !this.subscription.trim && !this.subscription.year) {
      this.alertService.showError('At least one filter needs to be populated!');
      return;
    }
    this.addSubscriptionService.addSubscription(this.subscription)
        .subscribe(data => this.router.navigate(['home']));
  }

}
