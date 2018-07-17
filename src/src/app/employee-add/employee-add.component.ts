import {Component,OnInit} from '@angular/core';
import {EmployeeService} from '../services/employeeService';
import { NgForm } from '@angular/forms';
import { Router}  from '@angular/router'

@Component({
  selector:"app-employee-add",
  templateUrl:"employee-add.component.html",
  
})

export class EmployeeAddComponent implements OnInit{
  
  employeeId:number;
  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(){
   this.employeeId =+ this.employeeService.generateEmployeeId();
  }

  addEmployeeDetails(form:NgForm){
        this.employeeService.employees.push(form.value)
        this.router.navigate(['/list'])      
      
    }
}