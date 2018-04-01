import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfflineService } from '../../services/offline.service';

@Component({
  selector: 'app-offline-header',
  templateUrl: './offline-header.component.html',
  styleUrls: ['./offline-header.component.css'],
  providers: [OfflineService]
})
export class OfflineHeaderComponent implements OnInit {
  isOnline: Observable<boolean>;
  constructor(offlineService: OfflineService) {
    this.isOnline = offlineService.isOnline();
  }

  ngOnInit() {
  }

}
