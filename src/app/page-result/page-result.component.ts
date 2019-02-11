import { Component, OnInit } from '@angular/core';
import {QUESTT1, STUD1} from '../mock-jeu-test';

@Component({
  selector: 'app-page-result',
  templateUrl: './page-result.component.html',
  styleUrls: ['./page-result.component.css']
})
export class PageResultComponent implements OnInit {

  moyenne = '4';
  maxRating = '5';
  testTitle = 'IHM partie 1';

  question = QUESTT1[2];
  student = STUD1;

  constructor() { }

  ngOnInit() {
  }

}
