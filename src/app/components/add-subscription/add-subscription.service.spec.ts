import { TestBed, inject } from '@angular/core/testing';

import { AddSubscriptionService } from './add-subscription.service';

describe('AddSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSubscriptionService]
    });
  });

  it('should be created', inject([AddSubscriptionService], (service: AddSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
