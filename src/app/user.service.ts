import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public customerInformation:any=[];
  public loginCustomerdetails=new User();
  public loginFlag:boolean=false;
  public accountsDetails:any;
  constructor(private http: HttpClient) { }

  addUser(user:any) {
    this.http.post("https://abcretailbank-default-rtdb.firebaseio.com/CustomerInformation.json",user).subscribe(res => {
      console.log(res);
    });
  }

  fetchUser() {
    return this.http.get<User[]>("https://abcretailbank-default-rtdb.firebaseio.com/CustomerInformation.json").pipe(
      map(response => {       
        const user: User[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            user.push(response[key]);
          }
        }
        return user;       
      })
    );
  }

  createAccount(account:any){
    this.http.post("https://abcretailbank-default-rtdb.firebaseio.com/CustomerRegistration.json",account).subscribe(res => {
      console.log(res);
    });
  }

  fetchAccount() {
    return this.http.get("https://abcretailbank-default-rtdb.firebaseio.com/CustomerRegistration.json").pipe(
      map(response => {       
        const userdata: any = [];
        this.accountsDetails=response;
        for (const key in response) {
          if (response.hasOwnProperty(key)) {   
            response[key].key=key;         
            userdata.push(response[key]);
            
          }
        }
        return userdata;       
      })
    );
  }

}
