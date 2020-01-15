import { Component, OnInit, ɵConsole } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee={id:0,firstName:"",lastName:"",emailId:"",active:false};
  

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    //this.employee={id:0,firstName:"",lastName:"",emailId:"",active:false};
    
 
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log("LLego la petion GET");
        console.log("--------------------");
        console.log(data)
        console.log("--------------------");
        
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
