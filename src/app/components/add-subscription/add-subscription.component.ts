import { Component, OnInit } from '@angular/core';
import { AddSubscriptionService } from './add-subscription.service';
import { Subscription } from '../../shared/models/subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent implements OnInit {
  subscription = new Subscription();
  constructor(private addSubscriptionService: AddSubscriptionService, private router: Router) { }

  ngOnInit() {
  }

  subscribe = () => {
    this.addSubscriptionService.addSubscription(this.subscription)
        .subscribe(data => this.router.navigate(['home']));
  }

}
