import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
@Input() trainees;
@Output() selectedtrainee = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  traineeSelected(item: any) {
    console.log(item);
    this.selectedtrainee.emit(item);
  }

}
