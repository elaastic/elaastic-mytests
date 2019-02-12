import {Component, Inject, OnInit} from '@angular/core';

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
    // percente value of the progress bar
    this.changingValue = note * 25;
  }
}
