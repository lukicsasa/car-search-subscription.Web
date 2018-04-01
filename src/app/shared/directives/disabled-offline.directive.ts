import { OfflineService } from '../services/offline.service';
import { Directive, Input, ElementRef, HostListener, SimpleChanges, OnChanges, Optional } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[disabledOffline]',
  providers: [OfflineService]
})
export class DisabledOfflineDirective implements OnInit {
  private isOffline: boolean;
  private isFormInvalid: boolean = false;
  constructor(@Optional() private form: ControlContainer, private el: ElementRef, private offlineService: OfflineService) { }

  ngOnInit() {
    this.offlineService.isOnline()
      .subscribe(isOnline => {
        this.isOffline = !isOnline;
        this.disable()
      });

    if (this.form)
      this.form.statusChanges.subscribe(() => {
        this.isFormInvalid = this.form.invalid;
        this.disable()
      });
  }

  disable() {
    this.el.nativeElement.disabled = this.isOffline || this.isFormInvalid;
  }
}
