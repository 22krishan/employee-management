import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "alert",
  template: `
    <section >
     <h1>Are you sure u want to {{operation}}</h1>
     <button (click)="output.next('Yes')">Yes</button>
     <button (click)="output.next('No')">No</button>
    <section>
   `
})
export class AlertComponent {
  @Input() operation: any;
  @Output() output = new EventEmitter();
 
}
