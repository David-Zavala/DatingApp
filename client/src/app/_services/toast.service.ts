import { Injectable } from '@angular/core';
declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  error(errorMsj: string = 'Error', errorStatus: string = 'noStatus', displayTime: number = 2000) {
    // Eliminar comillas si las tiene
    if (errorMsj.startsWith('"') && errorMsj.endsWith('"')) {
      errorMsj = errorMsj.slice(1, -1);
    }

    // Crear Toast
    const toastContainer = document.createElement('div');
    if (errorStatus == 'noStatus'){
      toastContainer.innerHTML = `
        <div border border-2 class="toast-container positions-fixed bottom-0 end-0 p-3 bg-danger text-light p-3 rounded-3" style="margin-right:20px;margin-bottom:100px">
          <div class="toast-body text-light">
            ${errorMsj}
          </div>
        </div>
      `;
    }
    else{
      toastContainer.innerHTML = `
        <div border border-2 class="toast-container positions-fixed bottom-0 end-0 p-3 bg-danger text-light p-3 rounded-3" style="margin-right:20px;margin-bottom:100px">
          <div class="toast-title text-light fw-bold" style="display: block;">
            <center>${errorStatus}<center>
          </div>
          <div class="toast-body text-light" style="display: block;">
            ${errorMsj}
          </div>
        </div>
      `;
    }
    // Implantar y mostrar Toast
    document.body.appendChild(toastContainer);
  
    const bsToast = new bootstrap.Toast(toastContainer, {
      autohide: true,
      delay: displayTime // Duración en milisegundos
    });
  
    bsToast.show();
  }
}
