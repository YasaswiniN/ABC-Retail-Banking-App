import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  form:FormGroup;
  submitted:boolean;
  Title:any=['Mr','Miss','Ms','Mrs'];
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      title: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
      confirmPassword:new FormControl('',[Validators.required]),
      invalidCheck:new FormControl(false,Validators.requiredTrue)
    },{ 
      validator: this.confirmedValidator('password', 'confirmPassword')
    })
  }  
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
   this.submitted=true;
   if(this.form.invalid){
     return;
   }else{
alert('User Data submitted');
   }
  }
  changetitle(e){
   
  }

  cancelFun(){
    this.submitted=false;
    this.form.reset();
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

}

