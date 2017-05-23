//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//COMPONENTS
import { AppComponent } from './app.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { VComponentBaseComponent } from './vcomponent-base/vcomponent-base.component';
//DIRECTIVES
import { AngularDraggableDirective } from './directives/draggable.directive';


@NgModule({
  declarations: [
    AngularDraggableDirective,
    AppComponent,
    VisualizerComponent,
    VComponentBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  , VisualizerComponent
  , VComponentBaseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
