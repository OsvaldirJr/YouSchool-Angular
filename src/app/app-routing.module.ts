import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { TypeRegisterComponent } from './type-register/type-register.component';
import { RegisterComponent } from './Home/register/register.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent  
},
{
  path:'type',
  component:TypeRegisterComponent  
},
{
  path:'register',
  component:RegisterComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
