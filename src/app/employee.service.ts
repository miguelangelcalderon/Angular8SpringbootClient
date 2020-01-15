import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number){
  
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(pepe: Object){
    return this.http.post<Employee>(`${this.baseUrl}`, pepe);
  }

  updateEmployee(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList() {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
}
