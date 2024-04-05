import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any;
  subscription!: Subscription;
  constructor(private http : HttpClient) { }

  getUsers():any[]{
      this.subscription = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
         this.userData = data;
      });
      return this.userData;
  }

  // ngOnDestroy() {
  //     this.subscription.unsubscribe();
  // }
}
