import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { ListTestComponent } from './list-test/list-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LastTestComponent } from './last-test/last-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent,
    SidebarComponent,
    LastTestComponent
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
