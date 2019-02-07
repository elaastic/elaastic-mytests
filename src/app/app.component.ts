import {Component, OnInit} from '@angular/core';
import {REPQ3T1} from './mock-jeu-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  answer = REPQ3T1[0];

  ngOnInit(): void {
  }
}
