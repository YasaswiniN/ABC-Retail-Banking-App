import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  Title: any = ['Savings', 'current', 'Checking'];

  constructor(private formbuilder: FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      title: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required]),
      middlename: new FormControl(''),
      namecard: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      pannumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      mobilenumber: new FormControl('', [Validators.required]),
      invalidCheck: new FormControl(false, Validators.requiredTrue)
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {      
      this.userservice.createAccount(this.form.value);
      alert('User Data submitted');
      this.cancelFun();
    }
  }
  changetitle(e) {

  }

  cancelFun() {
    this.submitted = false;
    this.form.reset();
  }
}

