import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DisplayArticleComponent } from './display-article/display-article.component';
import { DatabaseComponent } from './database/database.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayArticleComponent,
    DatabaseComponent,
    WelcomeComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
