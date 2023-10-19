import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[]=[
   /* {
      id: '5cde5fdf5-f11',
      name:'john',
      email:'johan@gmail.com',
      phone:998877665,
      salary:235,
      department:'it'
    },
    {
      id: '57cde5fdf5-f11',
      name:'johns',
      email:'johans@gmail.com',
      phone:9982277665,
      salary:666,
      department:'work'
    },
    {
      id: '4cde5fdf5-f11',
      name:'johny',
      email:'johany@gmail.com',
      phone:55669977665,
      salary:633,
      department:'work area'
    }*/
  ];
  constructor(private employeesService:EmployeesService){}
  ngOnInit(): void {
    this.employeesService.GetAllEmployees()
    .subscribe({
    next: (employees) =>{
      this.employees=employees;
    },
    error: (Response) =>{
      console.log(Response);
    }

    });
    
  }

}
