import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC-Retail-Banking-App';
  loginflag:boolean=false;
  constructor(public userservice:UserService){
this.loginflag=this.userservice.loginFlag;
  }
}
