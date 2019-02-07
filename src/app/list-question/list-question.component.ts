import { Component, OnInit } from '@angular/core';
import {STUD1, TEST1} from '../mock-jeu-test';
import {Test} from '../test';
import {Student} from '../student';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  checkParent: boolean;
  student: Student;

  constructor() { }

  ngOnInit() {
    this.student = STUD1;
  }

}
