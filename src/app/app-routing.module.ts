import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { ArticlesComponent } from './articles/articles.component';
import  { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
