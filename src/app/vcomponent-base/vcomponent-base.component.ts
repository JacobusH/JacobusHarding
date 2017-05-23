import { Component, OnInit } from '@angular/core';
import { AngularDraggableDirective } from '../directives/draggable.directive';

@Component({
  selector: 'app-vcomponent-base',
  templateUrl: './vcomponent-base.component.html',
  styleUrls: ['./vcomponent-base.component.css']
})
export class VComponentBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
