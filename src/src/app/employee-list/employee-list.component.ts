import {Component,OnInit} from '@angular/core';
import {EmployeeService} from '../services/employeeService';
import {Router}  from "@angular/router"

@Component({
  selector:"app-employee-list",
  templateUrl:"./employee-list.component.html",
  styleUrls:["./employee-list.component.css"]
})

export class EmployeeListComponent implements OnInit{
  employees:any;
  popUpFlag:boolean=false;
  operation:any;
  selectedEmployeeID:any;


  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(){   
  } 
  
  performOperation(event){

    this.popUpFlag=false;
    console.log("after performOperation")
    if(event=="Yes"){

      switch(this.operation){

        case "delete":
          let index=this.employeeService.employees.findIndex((employee)=>employee.id == this.selectedEmployeeID);
          this.employeeService.employees.splice(index,1);
          break;
        
        case "edit":
          this.router.navigate(['/edit/'+this.selectedEmployeeID])
          break;

        case "add":
          this.router.navigate(['/add']);
          break;

      }
    }

  }

  getDetails(id?:any,operation?:any){
   
    this.popUpFlag=true;
    if(id){
    this.selectedEmployeeID=id;
    }
    if(operation){
    this.operation=operation;
    }
  }


}