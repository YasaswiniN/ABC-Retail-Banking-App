import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  isVisible: boolean = false;
  username:string;
  password:string;
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isVisible = true;   
    this.userservice.fetchUser().subscribe(res => {     
    let user=new Array<User>();
    user=res;
    this.userservice.loginCustomerdetails=user.find(f=>f.username==this.username && f.password==this.password);
    if(this.userservice.loginCustomerdetails){
      this.userservice.loginFlag=true;
      this.router.navigate(['dashboard']);  
    }    
    });   
  }

}
