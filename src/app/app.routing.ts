import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleListComponent } from './article-list/article-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'new',
    component: NewArticleComponent
  }
  ,
  {
    path: 'articles',
    component: ArticleListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
