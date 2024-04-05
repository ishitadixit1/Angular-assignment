import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
      // console.log(this.userData);
    }
}
