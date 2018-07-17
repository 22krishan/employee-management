import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import {AlertComponent} from './utils/alert.component';
import {PopupComponent} from './utils/popup.component';

import {EmployeeService} from './services/employeeService';
import {NumberValidate} from './pipes/number-validate.pipe';

// import {ActivateGuard} from './route-guards/activate-guard';
// import {DeactivateGuard} from './route-guards/deactivate-guard'


const appRoutes:Routes=[
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:EmployeeListComponent},
  {path:'add',component:EmployeeAddComponent},
  {path:'edit/:id',component:EmployeeEditComponent}, 
  {path:'**',component:EmployeeListComponent}
  
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,EmployeeListComponent,EmployeeAddComponent,EmployeeEditComponent,AlertComponent,PopupComponent,NumberValidate ],
  bootstrap:    [ AppComponent ],
  entryComponents: [AlertComponent],
  providers:    [EmployeeService]
})
export class AppModule { }
