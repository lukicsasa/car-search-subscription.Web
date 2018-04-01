import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from '../../../shared/models/subscription';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers: [HomeService]
})
export class SubscriptionComponent implements OnInit {
  @Input() sub: Subscription;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  toggleSubscription(id) {
    this.homeService.toggleSubscription(id).subscribe(data => this.sub = data);
  }
}
