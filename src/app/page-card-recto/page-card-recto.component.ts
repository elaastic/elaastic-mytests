import {Component, Inject, Input, OnInit} from '@angular/core';
import {QUESTT1, STUD1} from '../mock-jeu-test';

@Component({
  selector: 'app-page-card-recto',
  templateUrl: './page-card-recto.component.html',
  styleUrls: ['./page-card-recto.component.css']
})
export class PageCardRectoComponent implements OnInit {

  @Input() numQuest: number;
  @Input() nbQuestion: number;
  @Input() testTitle: string;

  question = QUESTT1[2];
  student = STUD1;

  constructor() {
  }

  ngOnInit() {
  }

}
