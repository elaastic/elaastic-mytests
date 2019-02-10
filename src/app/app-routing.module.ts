import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageCreationTestComponent} from './page-creation-test/page-creation-test.component';
import {PageModifTestComponent} from './page-modif-test/page-modif-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: PageHomeComponent},
  { path: 'creation', component: PageCreationTestComponent},
  { path: 'modification/:id', component: PageModifTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
