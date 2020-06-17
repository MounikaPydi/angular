import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-using-reactive-forms',
  templateUrl: './register-using-reactive-forms.component.html',
  styleUrls: ['./register-using-reactive-forms.component.css']
})
export class RegisterUsingReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['ram', 'anna'];
  addressTypes = ['permanent', 'temporary'];
  signupForm: FormGroup;
  address: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('monika', Validators.required),
      credentials: new FormGroup({
        userName: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        password: new FormControl(null),
      }),
      gender: new FormControl('male'),
      courses: new FormArray([]),
    });
  }

  forbiddenNames(control: FormControl){
    if (this.forbiddenUserNames.indexOf(control.value) !== -1 && control.value.length > 0) {
      console.log(control.value, control.value.length, typeof(control.value));
      return {nameIsForbidden: true};
    }
    return null;
  }

  onAddCourse() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('courses') as FormArray).push(control);
    console.log(this.signupForm);
  }

  onNameChange(name){
    console.log(name); // To print name when changed
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
