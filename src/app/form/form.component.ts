import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = 'ruky';
  email = 'rukylovesu@gmail.com';
  formValue;
  register = [];
  // isTemplateDriven = false;
  constructor() { }

  ngOnInit() {
    // setTimeout(function() {
    //   this.name = 'newruky';
    // }, 10000);
    // setTimeout(function() {
    //   this.name = 'newruky2';
    // }, 15000);
    // setTimeout(function() {
    //   this.name = 'newruky3';
    // }, 20000);
  }
  onSubmit(myform) {
    console.log(myform.value);
    console.log(this.email);
    this.formValue = myform.value;
    this.register.push(this.formValue);
    myform.reset();
    }
}
