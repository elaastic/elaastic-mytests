import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QUESTT1, REPQ3T1, STUD1, TEST1} from './mock-jeu-test';
import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {PageCardRectoComponent} from './page-card-recto/page-card-recto.component';
import {PageCreationTestComponent} from './page-creation-test/page-creation-test.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageModifTestComponent} from './page-modif-test/page-modif-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

  }

}
