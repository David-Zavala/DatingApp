import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastService } from '../_services/toast.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toast = inject(ToastService)

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      else {
        toast.error("You shall not pass!!")
        return false;
      }
    })
  )
};
