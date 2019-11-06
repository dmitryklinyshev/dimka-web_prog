import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService, private http: HttpClient,
    private router: Router,  private ngxService: NgxUiLoaderService) { }

    ngOnInit() {
      this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
      // Stop the foreground loading after 5s
      setTimeout(() => {
        this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
      }, 200);
    }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.ngxService.start();
    this.employeeService.createEmployee(this.employee)
      .subscribe(data =>{
      this.ngxService.stop();
        this.gotoList()
      }, error => console.log(error));
    this.employee = new Employee();
    

  }



  onSubmit() {
    this.submitted = true;
    this.save();
  }

  

  gotoList() {
   
      this.router.navigate(['/employees'])
    
  }
  
}
