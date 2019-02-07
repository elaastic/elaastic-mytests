import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { AutoEvaluateComponent } from './auto-evaluate/auto-evaluate.component';
import { ListTestComponent } from './list-test/list-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LastTestComponent } from './last-test/last-test.component';
import { ListQuestionComponent } from './list-question/list-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoEvaluateComponent,
    ListTestComponent,
    SidebarComponent,
    LastTestComponent,
    ListQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
