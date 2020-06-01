import { Component, OnInit } from '@angular/core';
import { TraineeService } from './../service/trainee.service';
import { ITrainee } from './../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // showAlbum = true;
  // isTemplateDriven = false;
activeTrainee: any;
academy = [
            {name: 'Ruky', image: 'ruky.jpg', complexion: 'Dark', hobbies: ['Singing', 'Coding', 'Driving']},
            {name: 'Zino', image: 'Zino.jpg', complexion: 'Fair', hobbies: ['Football', 'Singing', 'Reading']},
            {name: 'Najeeb', image: 'Najeem.jpg', complexion: 'Dark', hobbies: ['Swimming', 'Dancing', 'Playing Football', ]},
            {name: 'Sarah', image: 'Sarah.jpg', complexion: 'Fair', hobbies: ['Coding', 'Dancing', 'Eating']},
            {name: 'Charles', image: 'charles.jpg', complexion: 'Dark', hobbies: ['Coding', 'Dancing', 'Eating']}
];
constructor(private traineeServ: TraineeService) { }
trainees: ITrainee[] = [];
  ngOnInit() {
    this.trainees = this.traineeServ.getTrainees();
  }

traineeListener(trainee) {
  console.log(trainee);
  this.activeTrainee = trainee;
}


}
