import { Injectable } from '@angular/core';
declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  error(errorMsj: string = 'Error', errorStatus: string = 'noStatus', displayTime: number = 2000) {
    // Delete "" if it has
    if (errorMsj.startsWith('"') && errorMsj.endsWith('"')) {
      errorMsj = errorMsj.slice(1, -1);
    }

    // Create Toast container
    const toastContainer = document.createElement('div');
    toastContainer.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3', 'bg-danger', 'text-light', 'p-3', 'rounded-3');
    toastContainer.style.marginRight = '5%';
    toastContainer.style.marginBottom = '5%';
    toastContainer.style.marginTop = '10px';
    
    // Append title if it has one
    if (errorStatus != 'noStatus'){
      const toastTitle = document.createElement('div');
      toastTitle.classList.add('toast-title', 'text-light', 'fw-bold', 'text-center');
      toastTitle.innerText = errorStatus;
      toastContainer.appendChild(toastTitle);
    }

    // Append error message
    const toastBody = document.createElement('div');
    toastBody.classList.add('toast-body', 'text-light');
    toastBody.innerText = errorMsj;
    toastContainer.appendChild(toastBody);

    // Append Toast to DOM
    document.body.appendChild(toastContainer);
  
    // Create a Bootstrap Toast
    const bsToast = new bootstrap.Toast(toastContainer, {
      autohide: true,
      delay: displayTime
    });
  
    // Show Toast
    bsToast.show();

    // Delete Toast after time elapsed
    bsToast._element.addEventListener('hidden.bs.toast', function () {
      document.body.removeChild(toastContainer);
    });
  }
}
