import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails : Employee={
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''

  };

 
  constructor(private route: ActivatedRoute,private employeeService: EmployeesService,private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params)=>{
         const id = params.get('id');
         if (id){
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (Response)=>{
              this.employeeDetails = Response;
            }
          });

         }
      }
    })
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.
      employeeDetails)
      .subscribe({
        next: (Response) => {
          this.router.navigate(['employees']);
        }
      });
  }
  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
