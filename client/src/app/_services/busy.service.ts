import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService, private toast: ToastService) { }

  busy() {
    this.busyRequestCount++;
    this.toast.loading();
    // this.spinnerService.show(undefined, {
    //   type: 'line-scale-party',
    //   bdColor: 'rgba(255,255,255,0)',
    //   color: '#333333'
    // })
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.toast.endloading();
      // this.spinnerService.hide();
    }
  }
}
