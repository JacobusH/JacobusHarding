import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VComponentBaseComponent } from './vcomponent-base.component';

describe('VComponentBaseComponent', () => {
  let component: VComponentBaseComponent;
  let fixture: ComponentFixture<VComponentBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VComponentBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VComponentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
