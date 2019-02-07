import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-auto-evaluate',
  templateUrl: './auto-evaluate.component.html',
  styleUrls: ['./auto-evaluate.component.css']
})
export class AutoEvaluateComponent implements OnInit {

  changingValue = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onClickEvaluate(note) {
    this.changingValue = note * 20;
  }
}
