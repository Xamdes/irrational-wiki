import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisplayArticleComponent } from './display-article/display-article.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'articles/:id',
    component: DisplayArticleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
