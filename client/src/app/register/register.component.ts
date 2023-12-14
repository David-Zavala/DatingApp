import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastService } from '../_services/toast.service';
declare var bootstrap: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService, private toastService: ToastService) { }

  ngOnInit(): void {

  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error.error)//this.toastErrorService.error(JSON.stringify(error.error))
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
