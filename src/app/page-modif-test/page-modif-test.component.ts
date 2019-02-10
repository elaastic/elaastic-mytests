import { Component, OnInit } from '@angular/core';
import {Test} from '../test';
import {ActivatedRoute} from '@angular/router';
import {STUD1} from '../mock-jeu-test';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-modif-test',
  templateUrl: './page-modif-test.component.html',
  styleUrls: ['./page-modif-test.component.css']
})
export class PageModifTestComponent implements OnInit {

  test: Test;

  id: number;

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getTestId();
    this.getTest();
  }

  getTestId(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  getTest(): void {
    // passage par un service
    this.test = STUD1.tests.find(test => test.id === this.id);
  }

  goBack(): void {
    this.location.back();
  }
}
