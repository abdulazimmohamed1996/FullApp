import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employess/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employess/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employess/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',component:EmployeesListComponent
  },
  {
    path:'employees',component:EmployeesListComponent
  },
  {
    path:'employees/add',component:AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
