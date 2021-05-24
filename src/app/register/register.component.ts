import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  
  onSubmit() {
   alert('User Data Submitted');
   let user:any = {};
   user = this.model;
   user.role=2;
   this.userservice.addUser(user);


  }
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

}
