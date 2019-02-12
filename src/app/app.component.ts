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

  @ViewChild('testAddComponent', {read: ViewContainerRef}) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

  }

  chargerPageCardRectoComponent(nbQuestion: number, numQuestion: number, title: string) {

    this.target.clear();
    const compFactory = this.cfr.resolveComponentFactory(PageCardRectoComponent);
    const component = this.target.createComponent(compFactory);
    component.instance.nbQuestion = TEST1.questions.length;
    component.instance.numQuest = 1;
    component.instance.testTitle = TEST1.title;
  }

  chargerPageCreationTest() {

    this.target.clear();
    const compFactory = this.cfr.resolveComponentFactory(PageCreationTestComponent);
    this.target.createComponent(compFactory);
  }

  chargerPageHome() {

    this.target.clear();
    const compFactory = this.cfr.resolveComponentFactory(PageHomeComponent);
    this.target.createComponent(compFactory);
  }

  chargerPageModifTest() {
    this.target.clear();
    const compFactory = this.cfr.resolveComponentFactory(PageModifTestComponent);
    this.target.createComponent(compFactory);
  }
}
