import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule} from 'ng2-semantic-ui';
import { AutoEvaluateComponent } from './auto-evaluate/auto-evaluate.component';
import { ListTestComponent } from './list-test/list-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LastTestComponent } from './last-test/last-test.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { QuestionChoiceComponent } from './question-choice/question-choice.component';
import { LineAnswerComponent } from './line-answer/line-answer.component';
import { CardResultComponent } from './card-result/card-result.component';
import { CardTestComponent } from './card-test/card-test.component';
import { PageCardRectoComponent } from './page-card-recto/page-card-recto.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent} from './page-home/page-home.component';
import { PageCreationTestComponent } from './page-creation-test/page-creation-test.component';
import { PageModifTestComponent } from './page-modif-test/page-modif-test.component';
import {PageResultComponent} from './page-result/page-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoEvaluateComponent,
    ListTestComponent,
    SidebarComponent,
    LastTestComponent,
    ListQuestionComponent,
    QuestionChoiceComponent
    LineAnswerComponent,
    CardResultComponent,
    CardTestComponent,
    PageCardRectoComponent,
    PageHomeComponent,
    FooterComponent,
    PageCreationTestComponent,
    PageModifTestComponent,
    PageResultComponent
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
