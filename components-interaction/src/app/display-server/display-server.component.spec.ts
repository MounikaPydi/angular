import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayServerComponent } from './display-server.component';

describe('DisplayServerComponent', () => {
  let component: DisplayServerComponent;
  let fixture: ComponentFixture<DisplayServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
