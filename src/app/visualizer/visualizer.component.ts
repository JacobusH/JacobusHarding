import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { VComponentBaseComponent } from '../vcomponent-base/vcomponent-base.component'; 

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit, AfterViewInit {
  @ViewChild('parent', {read: ViewContainerRef}) parent: ViewContainerRef;
  @ViewChild('visualizer') visualizer: ElementRef;
  @ViewChild('vAdder') vAdder:ElementRef;
  childComponent;

  vWidth: any = 15;
  oldVWidth: any;
  vHeight: any = 15;
  oldVHeight: any;

  enterShow: boolean = false;
  isFullSize: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.childComponent = this.componentFactoryResolver.resolveComponentFactory(VComponentBaseComponent);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  AddBaseComponent(event) {
    this.parent.createComponent(this.childComponent);
    event.stopPropagation();
  }

  ChangeSize() {
    if(!this.isFullSize)
    {
      this.vHeight = 100;
      this.vWidth = 100;
    }
    else
    {
      this.vHeight = 15;
      this.vWidth = 15;
    }
   
    this.isFullSize = !this.isFullSize;
  }

  OnMouseenter() {
    this.enterShow = true;
  }

  OnMouseleave() {
    this.enterShow = false;
  }

  OnClick() {
    this.ChangeSize();
  }

}
