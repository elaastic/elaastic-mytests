import {Component, Input, OnInit} from '@angular/core';
import {Answer} from '../answer';

@Component({
  selector: 'app-line-answer',
  templateUrl: './line-answer.component.html',
  styleUrls: ['./line-answer.component.css']
})
export class LineAnswerComponent implements OnInit {

  @Input() answer: Answer;

  constructor() {
  }

  ngOnInit() {
  }

}
