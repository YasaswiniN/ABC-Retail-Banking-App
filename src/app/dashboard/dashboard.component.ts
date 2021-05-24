import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  records:any;
  searchtext:string="";
  constructor(public userservice:UserService) {
    this.records = ['Summary','Payments'];
     
   }

  ngOnInit(): void {
  }

  search(){
    this.userservice.fetchAccount().subscribe(res => {
      console.log(res);
    }); 
  }

}
