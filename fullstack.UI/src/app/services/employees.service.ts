import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';




@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl = environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  
  GetAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employees')
  }
  addEmployee(addEmployeeRequest : Employee) : Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post <Employee> (this.baseApiUrl + '/api/Employees',addEmployeeRequest);
  }
  getEmployee(id: string): Observable<Employee>{
     return this.http.get<Employee>(this.baseApiUrl + '/api/Employees/' + id)
  }
  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employees/' + id,
    updateEmployeeRequest);
  }
  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Employees/' + id);
  }
 
}
