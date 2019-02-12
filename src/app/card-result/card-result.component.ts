import {Component, Input, OnInit} from '@angular/core';
import {Answer} from '../answer';
import {Question} from '../question';
import {Student} from '../student';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent implements OnInit {

  @Input() listAnswer: Answer[];
  @Input() question: Question;
  @Input() reponsePersos: string;
  @Input() student: Student;

  constructor() {
  }

  ngOnInit() {
  }

}
