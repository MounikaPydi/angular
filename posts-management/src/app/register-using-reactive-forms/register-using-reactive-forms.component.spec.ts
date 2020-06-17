import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUsingReactiveFormsComponent } from './register-using-reactive-forms.component';

describe('RegisterUsingReactiveFormsComponent', () => {
  let component: RegisterUsingReactiveFormsComponent;
  let fixture: ComponentFixture<RegisterUsingReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUsingReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUsingReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
