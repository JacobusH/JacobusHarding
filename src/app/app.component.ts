import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { VisualizerComponent } from './visualizer/visualizer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;
  childComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.childComponent = this.componentFactoryResolver.resolveComponentFactory(VisualizerComponent);
    
  }

  AddVisualizer() {
    this.parent.createComponent(this.childComponent);
  }

}
