import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registerForm);
    console.log(this.registerForm.value.credentials);
  }
}
