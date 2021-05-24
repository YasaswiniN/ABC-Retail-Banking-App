import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountpaymentsComponent } from './accountpayments/accountpayments.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { CardComponent } from './card/card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'customer', component: CustomerComponent },
  {path:'account',component:AccountComponent},
  {path:'card',component:CardComponent},
  {path:'loan',component:LoanComponent},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'Summary',component:AccountsummaryComponent},
    {path:'Payments',component:AccountpaymentsComponent}
  ]}, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
