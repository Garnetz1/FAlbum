import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
myForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      state: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    // subscribing to observables (it help to save users data while filling the form)
    this.myForm.statusChanges.subscribe((changes) => {
      console.log(changes);
    });
    this.myForm.valueChanges.subscribe((changes) => {
      console.log(changes);
    });

  }
  done(myForm: FormGroup) {
    console.log(myForm.value);
    // to assign a value to a field which user dont have to fill
    this.myForm.patchValue({name: 'emmanuel'});
    this.myForm.setValue({name: 'ruky', email: 'rukylovesu@gmail.com', });
  }

}
