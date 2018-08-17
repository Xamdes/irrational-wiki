import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayArticleComponent } from './display-article/display-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'articles/:id', component: DisplayArticleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
