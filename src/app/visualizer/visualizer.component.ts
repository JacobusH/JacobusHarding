import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { VComponentBaseComponent } from '../vcomponent-base/vcomponent-base.component';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;
 
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(VComponentBaseComponent);
    let anotherChildComponentHolder;
 
    setTimeout(()=> {
      // at this point we want the "child" component to be rendered into the app.component:
      this.parent.createComponent(childComponent);
 
    }, 1000);
  }

  ngOnInit() {
  }

}
