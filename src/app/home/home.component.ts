import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
    userData:any;
    constructor(public userService : UserService){}

    ngOnInit():void{
      this.userData = this.userService.getUsers();
    }
}
