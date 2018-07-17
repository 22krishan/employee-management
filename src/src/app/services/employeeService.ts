import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService{
  employees:any[]
  constructor(private _http:HttpClient){
    this.getEmployees()
  }

  getEmployees():any{
    return this._http.get("../assets/employee.json")
    .subscribe(data=>this.employees=data.data) 

  }
  getMaxId():number{
    return Math.max.apply(Math, this.employees.map(function(o){ return o.id }))
  }

  getEmployeeById(id:any):any{
    return this.employees.find(employee=>employee.id == id)
  }
  
  generateEmployeeId():number{
    if(this.getMaxId() >= 1){
      return this.getMaxId()+1;
    }else{ 
      return 1;
    }

  }

}
