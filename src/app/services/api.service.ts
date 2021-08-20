import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  sendFormData(payload:any) {
    return fetch(environment.sheetURL, {
      method: 'POST',
      cache: 'no-cache',
      redirect: 'follow',
      body: JSON.stringify(payload)
    })
  }
}
