import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatNativeDateModule } from '@angular/material/core';
//import { DatePickerModule } from 'angular-material-datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { CardComponent } from './card/card.component';
import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { MatchPasswordDirective } from './match-password.directive';
import { HttpClientModule } from '@angular/common/http';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AccountpaymentsComponent } from './accountpayments/accountpayments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AccountComponent,
    CardComponent,
    LoanComponent,
    HomeComponent,
    ContactUsComponent,
    DashboardComponent,
    RegisterComponent,
    MatchPasswordDirective,
    AccountsummaryComponent,
    AccountpaymentsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //MaterialModule.forRoot(),
   // DatePickerModule,
    //MatDatepickerModule,
    //MatFormFieldModule,
    //MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
