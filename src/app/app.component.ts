import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

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
