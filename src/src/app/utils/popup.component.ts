import {Component, NgModule,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, Input,EventEmitter,OnDestroy,OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'pop-up',
  template: `
    <template #alertContainer></template>
  `,
})
export class PopupComponent implements OnInit ,OnDestroy{

 @Input() operation:any;
 @Output() output =new EventEmitter();
 @ViewChild("alertContainer", { read: ViewContainerRef }) container;
 componentRef: ComponentRef;
 
  constructor(private resolver: ComponentFactoryResolver) {}
  
  ngOnInit(){
    this.createComponent(this.operation)
  }

  createComponent(operation) {
    this.container.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    console.log("Test" + operation)
    this.componentRef.instance.operation = operation;

    this.componentRef.instance.output.subscribe(event =>{
      
      console.log(event);
      this.output.emit(event);
      this.componentRef.destroy();  
      
      });

  }
  
    ngOnDestroy() {
      console.log("Inside destroy")
        
    }
}
