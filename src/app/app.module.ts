import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { ListTestComponent } from './list-test/list-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent
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
