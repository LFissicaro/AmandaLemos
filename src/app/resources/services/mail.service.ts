import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  route: string = "http://localhost:3000/sendEmail";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  sendEmail(data: any) {    
    return this.http.post(this.route, data);
  }
}
