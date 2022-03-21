import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { RegisterComponent } from './register/register.component';
import { EmpComponent } from './emp/emp.component';


const routes: Routes = [
  {path:'empdashboard',component: EmpdashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'emp',component:EmpComponent},
  {path:'**',component: EmpdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
