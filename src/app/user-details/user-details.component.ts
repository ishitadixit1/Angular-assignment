import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
   id: any;
   user: any;
   sub! : Subscription;
   constructor(
      private route: ActivatedRoute,
      private userService : UserService,
      private http : HttpClient,
   ){}
   users : any;

   ngOnInit():void{
     this.id = this.route.snapshot.params['id'];
     this.myUser();
   }

   myUser(): void{
     this.http.get('https://jsonplaceholder.typicode.com/users/' + this.id).subscribe((user) => 
     {
          this.users = user;
      }
      );
  }
}
