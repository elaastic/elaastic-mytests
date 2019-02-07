import { Component, OnInit } from '@angular/core';
import {STUD1} from '../mock-jeu-test';
import {Test} from '../test';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  listTest: Test[];

  constructor() { }

  ngOnInit() {
    this.listTest = STUD1.tests;
  }

}
