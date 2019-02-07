import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrls: ['./card-test.component.css']
})
export class CardTestComponent implements OnInit {

  @Input() question;
  @Input() student;

  constructor() { }

  ngOnInit() {
  }

}
