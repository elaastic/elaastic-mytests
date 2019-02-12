import { Component, OnInit } from '@angular/core';
import {QUESTT1, REPQ1T1, REPQ3T1, STUD1} from "../mock-jeu-test";

@Component({
  selector: 'app-page-card-verso',
  templateUrl: './page-card-verso.component.html',
  styleUrls: ['./page-card-verso.component.css']
})
export class PageCardVersoComponent implements OnInit {

  question = QUESTT1[2];
  student = STUD1;

  numQuest = 1;
  nbQuestion = 3;
  testTitle = 'IHM partie 1';

  listAnswer = REPQ3T1;

  constructor() { }

  ngOnInit() {
  }

}
