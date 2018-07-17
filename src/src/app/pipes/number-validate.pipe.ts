import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name:"validatePhoneNumber"
})
export class NumberValidate implements PipeTransform{

  transform(value:any){
    if(isNaN(value) || value.length != 10){
      
      return "NA"
    }else{
      console.log(value)
      return value
    }
  }
}