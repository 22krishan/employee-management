import {Component,OnInit} from '@angular/core';
import {EmployeeService} from '../services/employeeService';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute}  from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector:"app-employee-edit",
  templateUrl:"employee-edit.component.html" 
})
export class EmployeeEditComponent implements OnInit{
  success:boolean=false;
  employeeId:any;
  employeeToEdit:any;

  constructor(
    private route:ActivatedRoute,
    private employeeService:EmployeeService,
    private router:Router
  ){}

  ngOnInit(){
    this.getEmployee();
  }

   getEmployee(){
    this.employeeId =+ this.route.snapshot.paramMap.get('id');
    this.employeeToEdit=this.employeeService.getEmployeeById(this.employeeId);
  
  }

  saveEdit(form:NgForm){
    let index=this.employeeService.employees.findIndex((employee)=>employee.id==this.employeeId)
    this.employeeService.employees.splice(index,1,Object.assign(this.employeeToEdit,form.value))
    console.log(this.employeeService.employees);
    this.router.navigate(['/list']);
  //  this.success=true;

  }

  
}
