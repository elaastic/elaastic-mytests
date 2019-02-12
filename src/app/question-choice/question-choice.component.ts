import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../test';

@Component({
  selector: 'app-question-choice',
  templateUrl: './question-choice.component.html',
  styleUrls: ['./question-choice.component.css']
})
export class QuestionChoiceComponent implements OnInit {

  @Input() test: Test;

  checkParent: boolean = false;
  checkChild: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switchParent() {
    let was: boolean;
    was = this.checkParent;
    this.checkParent = !this.checkParent;
    if (!was && this.checkParent) {
      this.checkChild = true;
    } else {
      if (was && !this.checkParent) {
        this.checkChild = false;
      }
    }
  }
}
