import { Injectable } from '@angular/core';
declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  error(errorMsj: string) {
    //errorMsj = errorMsj.substring(1, errorMsj.length - 1);
    const toastContainer = document.createElement('div');
  
    toastContainer.innerHTML = `
      <div class="toast-container positions-fixed bottom-0 end-0 p-3 bg-danger text-light p-3 rounded-3" style="margin-right:20px;margin-bottom:100px">
        <div class="toast-body text-light">
          ${errorMsj}
        </div>
      </div>
    `;
    document.body.appendChild(toastContainer);
  
    const bsToast = new bootstrap.Toast(toastContainer, {
      autohide: true,
      delay: 2000 // Duración en milisegundos
    });
  
    bsToast.show();
  }
}
