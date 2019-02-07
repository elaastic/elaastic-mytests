import { Component, OnInit } from '@angular/core';
import {TEST1} from '../mock-jeu-test';
import {Test} from '../test';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  test: Test;
  constructor() { }

  ngOnInit() {
    this.test = TEST1;
  }

}
